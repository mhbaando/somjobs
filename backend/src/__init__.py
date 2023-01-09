import os

from flask import Flask, abort, jsonify, request
from flask_bcrypt import Bcrypt
from flask_cors import CORS, cross_origin
from flask_migrate import Migrate

# our modules db, and models
from .auth import requires_auth
from .auth.generate_token import generate_token
from .databases.models import User, db


# factory function
def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)
    CORS(app)

    app.app_context().push()
    DB_USER = os.environ.get("DB_USER")
    DB_HOST = os.environ.get("DB_HOST")
    DB = os.environ.get("DB")
    SECRET_KEY = os.environ.get("SECRET_KEY")

    # db config
    app.config.from_mapping(
        SQLALCHEMY_DATABASE_URI=f"postgresql://{DB_USER}@{DB_HOST}:5432/{DB}",
        SQLALCHEMY_TRACK_MODIFICATIONS=False,
        SECRET_KEY=SECRET_KEY,
    )

    db.init_app(app)
    migrate = Migrate(app, db)
    bcrypt = Bcrypt(app)

    # CORS Headers
    @app.after_request
    def after_request(response):
        response.headers.add(
            "Access-Control-Allow-Headers", "Content-Type,Authorization"
        )
        response.headers.add(
            "Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS"
        )
        return response

    # ------- Routes ---------- #
    # Public
    # -------  Routes ---------- #
    @app.post("/auth")
    def login():
        data = request.get_json()
        email = data.get("email", None)
        password = data.get("password", None)

        if email is None or password is None:
            abort(400)

        # check if the user exist
        user = db.session.query(User).filter(User.email == email).first()
        if not user:
            abort(404)

        # check if the passowrds are not match
        if not bcrypt.check_password_hash(user.password, password):
            abort(401)

        token = generate_token(user)

        return {"success": True, "token": token}

    @app.post("/auth/register")
    def register():
        data = request.get_json()
        email = data.get("email", None)
        password = data.get("password", None)
        role = data.get("role", None)

        print(email, password, role)
        if email is None or password is None or role is None:
            abort(400)

        # check if the user exists
        user_is_exist = (
            db.session.query(User).filter(User.email == email).first() is not None
        )

        if user_is_exist:
            abort(409)

        # hash the password
        hashed_pass = bcrypt.generate_password_hash(password).decode("utf8")

        new_user = User(email=email, password=hashed_pass, role=role)
        db.session.add(new_user)
        db.session.commit()

        # return back the current user
        registered_user = (
            db.session.query(User.id, User.email, User.created_at, User.role)
            .filter(User.email == email)
            .first()
        )

        # fn generetas token
        token = generate_token(registered_user)
        return {"success": True, "token": token}




    # ------- Routes ---------- #
    # Protected
    # -------  Routes ---------- #

    @app.get('/test')
    @requires_auth('company')
    def test_protected_route(jwt):
        return {
            'success':'works',
        }


    @app.errorhandler(400)
    def bad_request(err):
        return {"success": False, "error": 400, "message": "Bad Request"}, 400

    @app.errorhandler(401)
    def unauthorized(err):
        return {"success": False, "erorr": 401, "message": "Not Authorized"}, 401
    
    @app.errorhandler(403)
    def forbidden_access(err):
        return {"success": False, "erorr": 403, "message": "Forbidden Access"}, 403

    @app.errorhandler(404)
    def notfound(err):
        return {"success": False, "erorr": 404, "message": "not found"}, 404
    
    @app.errorhandler(409)
    def conflict_requesr(err):
        return {"success": False, "error": 409, "message": "User is Already exist"}, 409
    


    return app
