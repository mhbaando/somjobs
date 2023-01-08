import os
from flask_cors import CORS
from flask_migrate import Migrate
from flask import Flask,request,jsonify,abort

# our modules db, and models 
from .databases.models import db
from .auth import *

# factory function
def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)
    app.app_context().push()
    DB_USER = os.environ.get('DB_USER')
    DB_HOST = os.environ.get('DB_HOST')
    DB = os.environ.get('DB')

    # db config
    app.config.from_mapping(SQLALCHEMY_DATABASE_URI = f'postgresql://{DB_USER}@{DB_HOST}:5432/{DB}')
    db.init_app(app)
    migrate = Migrate(app,db)

    # CORS Headers
    CORS(app, resources={r"/api/*": {"origins": "*"}})
    @app.after_request
    def after_request(response):
        response.headers.add(
            "Access-Control-Allow-Headers", "Content-Type,Authorization,true"
        )
        response.headers.add(
            "Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS"
        )
        return response

    # api end points 
    @app.post('/api/auth')
    def login():
        return {'message':'hello'}
    
    return app