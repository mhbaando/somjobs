import os

from flask import Flask, abort, jsonify, request
from flask_bcrypt import Bcrypt
from flask_cors import CORS,cross_origin
from flask_migrate import Migrate

# our modules db, and models
from .auth import requires_auth
from .auth.generate_token import generate_token
from .databases.models import Employee, User, db,Company


# factory function
def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)
    cors = CORS(app, resources={r"/*": {"origins": "*"}})

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
            "Access-Control-Allow-Origin", "*"
        )
        response.headers.add(
            "Access-Control-Allow-Methods", "GET,PUT,PATCH,POST,DELETE,OPTIONS"
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
            db.session.query(User.id, User.email, User.created_at, User.role, User.owner)
            .filter(User.email == email)
            .first()
        )

        # fn generetas token
        token = generate_token(registered_user)
        return {"success": True, 
        "token": token
        }




    # ------- Routes ---------- #
    # Protected
    # -------  Routes ---------- #

    @app.post('/employee/profile')
    @requires_auth('employee')
    def register_user(jwt):        
        data = request.get_json()
        user_id = data.get('id')
        full_name= data.get('full_name')
        email = data.get('email')
        phone = data.get('phone')
        country = data.get('country')
        city = data.get('city')
        title = data.get('title')
        summary = data.get('summary')
        linkedin_link = data.get('linkedin_link')
        github_link = data.get('github_link')
        image = data.get('image')

        try:
            # all check are done on the front end 
            new_user = Employee(
                full_name=full_name,
                email=email,
                phone=phone,
                country = country,
                city=city,
                title=title,
                summary=summary,
                linkedin_link=linkedin_link,
                github_link=github_link,
                image=image
            )
            
            db.session.add(new_user)
            db.session.commit()
            # update the user to the new owner 
            exited_user = db.session.query(User).filter(User.id==user_id).first()
            
            if exited_user is None:
                abort(400)
            exited_user.owner = new_user.id
            db.session.commit()
            token = generate_token(exited_user)
            return {
                'success':'True',
                'token':token
            }
        except:
            abort(400)
            db.session.rollback()
        finally:
            db.session.close()


    #  get user information
    @app.get('/employee/profile/<id>')
    @requires_auth('employee')
    def get_user(jwt,id):
        user = db.session.query(User).filter(User.id==id).first()
        if user is None:
            abort(404)

        employee = db.session.query(Employee).filter(Employee.id == user.owner).first()
        
        if employee is None:
            abort(404)

        formatted_employee= employee.format()
        
        return {
            'success':True,
            'user': formatted_employee
        }
    
    # update user information
    @app.patch('/employee/profile/<id>')
    @requires_auth('employee')
    def update_user(jwt,id):
        data = request.get_json()
        user_id = data.get('id')
        full_name= data.get('full_name')
        email = data.get('email')
        phone = data.get('phone')
        country = data.get('country')
        city = data.get('city')
        title = data.get('title')
        summary = data.get('summary')
        linkedin_link = data.get('linkedin_link')
        github_link = data.get('github_link')
        image = data.get('image')

        employee = db.session.query(Employee).filter(Employee.id==user_id).first()

        if employee is None:
            abort(404)

        employee.email = email
        employee.phone = phone
        employee.city = city
        employee.image = image
        employee.title = title
        employee.summary = summary
        employee.country = country
        employee.full_name = full_name
        employee.github_link = github_link
        employee.linkedin_link = linkedin_link

        db.session.commit()

        formatter_user = employee.format()

        return {
            'success':True,
            'user':formatter_user
        }


    # TODO: implement pdf file uppload 
    @app.post('/employee/uppload')
    @requires_auth()
    def uppload_cv(jwt):
        data = request.get_json()
        id = data.get('id',None)
        cv = request.files['cv']

        # if id is None or cv is None:
        #     abort(400)

        user = db.session.query(Employee).filter(Employee.id==id).first()
        
        if user is None:
            abort(404)
        
        # user.cv = 
        print(cv)
        return {
            'success':True,
            'cv':[]
        }


    @app.post('/employee/change-password/<id>')
    @requires_auth()
    def change_password(jwt,id):
        data = request.get_json()
        old_password= data.get('old_password',None)
        new_password= data.get('new_password',None)

        user = db.session.query(User).filter(User.id==id).first()
        
        if user is None:
            print('here')
            abort(404)
        
        if old_password is None or new_password is None:
            abort(400)

        # check hass password 
        if not bcrypt.check_password_hash(user.password, old_password):
            abort(401)
       
        hashed_pass = bcrypt.generate_password_hash(new_password).decode("utf8")
        user.password = hashed_pass

        db.session.commit()

        return {
            'success':True
        }

    @app.post('/employee/delete-user/<id>')
    @requires_auth()
    def delete_password(jwt,id):
        data = request.get_json()
        password= data.get('password',None)

        if password is None:
            abort(400)

        user = db.session.query(User).filter(User.id==id).first()
        if user is None:
            abort(404)

        employee = db.session.query(Employee).filter(Employee.id == user.owner).first()
        if employee is None:
            abort(404)

        db.session.delete(user)
        db.session.delete(employee)
        db.session.commit()

        return {
            'success':True
        }

        

    # --------- Company ---------
    # register new user for company
    # -------- Company --------
    @app.post('/company/profile')
    @requires_auth('company')
    def register_user_company(jwt): 
        data = request.get_json()
        user_id = data.get('id')
        full_name= data.get('full_name')
        email = data.get('email')
        phone = data.get('phone')
        country = data.get('country')
        city = data.get('city')
        title = data.get('title')
        summary = data.get('summary')
        linkedin_link = data.get('linkedin_link')
        github_link = data.get('github_link')
        image = data.get('image')

        try:
            # all check are done on the front end 
            new_user = Employee(
                full_name=full_name,
                email=email,
                phone=phone,
                country = country,
                city=city,
                title=title,
                summary=summary,
                linkedin_link=linkedin_link,
                github_link=github_link,
                image=image
            )
            
            db.session.add(new_user)
            db.session.commit()
            # update the user to the new owner 
            exited_user = db.session.query(User).filter(User.id==user_id).first()
            
            if exited_user is None:
                abort(400)
            exited_user.owner = new_user.id
            db.session.commit()
            token = generate_token(exited_user)
            return {
                'success':'True',
                'token':token
            }
        except:
            abort(400)
            db.session.rollback()
        finally:
            db.session.close()  

    # ---------
    # Update Company user info 
    # --------
    @app.patch('/company/profile/<id>')
    @requires_auth('company')
    def update_user_company(jwt,id):
        data = request.get_json()
        user_id = data.get('id')
        full_name= data.get('full_name')
        email = data.get('email')
        phone = data.get('phone')
        country = data.get('country')
        city = data.get('city')
        title = data.get('title')
        summary = data.get('summary')
        linkedin_link = data.get('linkedin_link')
        github_link = data.get('github_link')
        image = data.get('image')

        employee = db.session.query(Employee).filter(Employee.id==user_id).first()

        if employee is None:
            abort(404)

        employee.email = email
        employee.phone = phone
        employee.city = city
        employee.image = image
        employee.title = title
        employee.summary = summary
        employee.country = country
        employee.full_name = full_name
        employee.github_link = github_link
        employee.linkedin_link = linkedin_link

        db.session.commit()

        formatter_user = employee.format()

        return {
            'success':True,
            'user':formatter_user
        }



    # ---------
    # get employee info for the compnay 
    # --------
    @app.get('/company/profile/<id>')
    @requires_auth('company')
    def get_user_company(jwt,id):
        user = db.session.query(User).filter(User.id==id).first()
        if user is None:
            abort(404)

        employee = db.session.query(Employee).filter(Employee.id == user.owner).first()
        
        if employee is None:
            abort(404)

        formatted_employee= employee.format()
        company = db.session.query(Company).filter(Company.user== employee.id).first()
        
        return {
            'success':True,
            'user': formatted_employee,
            "company_id":company.id
        } 


    # ---------
    # get company info
    # --------
    @app.get('/company/<id>')
    @requires_auth('company')
    def get_company_info(jwt,id):
        company = db.session.query(Company).filter(Company.id==id).first()

        if company is None:
            abort(404)

        formatted_company = company.format()

        return {
            'success':True,
            'company': formatted_company
        }
    
    # ---------
    # Register new company
    # --------
    @app.post('/company/profile/<id>')
    @requires_auth('company')
    def register_company(jwt,id):
        data = request.get_json()
        name = data.get('name')
        email = data.get('email')
        website = data.get('website')
        country = data.get('country')
        city = data.get('city')
        image = data.get('image')

        # logged in user  
        user = db.session.query(User).filter(User.id==id).first()
        if user is None:
            abort(404)

        # employee
        employee = db.session.query(Employee.id).filter(Employee.id == user.owner).first()
        if employee is None:
            abort(404)


        new_company = Company(name=name, email=email,website=website,country=country,city=city,image=image)
        db.session.add(new_company)
        db.session.commit()

        #  update the employe compnay
        new_company.user = employee.id
        db.session.commit()


        return {
            'success':True,
            'company_id': int(new_company.id)
        }

    # ---------
    # Update company info
    # --------
    @app.patch('/company/update/<id>')
    @requires_auth('company')
    def update_company(jwt,id):
        data = request.get_json()
        name = data.get('name')
        email = data.get('email')
        website = data.get('website')
        country = data.get('country')
        city = data.get('city')
        image = data.get('image')

       # company 
        company = db.session.query(Company).filter(Company.id==id).first()
        print(company)
        if company is None:
            abort(404)
        
        company.name = name
        company.email = email,
        company.website = website,
        company.country = country
        company.city = city
        company.image = image
        db.session.commit()

        return {
            'success':True,
        }

    
    # ---------
    # change company user password
    # --------
    @app.post('/company/change-password/<id>')
    @requires_auth('company')
    def company_change_password(jwt,id):
        data = request.get_json()
        old_password= data.get('old_password',None)
        new_password= data.get('new_password',None)

        user = db.session.query(User).filter(User.id==id).first()
        
        if user is None:
            print('here')
            abort(404)
        
        if old_password is None or new_password is None:
            abort(400)

        # check hass password 
        if not bcrypt.check_password_hash(user.password, old_password):
            abort(401)
       
        hashed_pass = bcrypt.generate_password_hash(new_password).decode("utf8")
        user.password = hashed_pass

        db.session.commit()

        return {
            'success':True
        }
    

    @app.post('/company/delete-user/<id>')
    @requires_auth('company')
    def delete_company(jwt,id):
        data = request.get_json()
        password= data.get('password',None)

        if password is None:
            abort(400)

        user = db.session.query(User).filter(User.id==id).first()
        if user is None:
            abort(404)

        employee = db.session.query(Employee).filter(Employee.id == user.owner).first()
        company = db.session.query(Company).filter(Company.user == employee.id).first()
        if employee is None:
            abort(404)

        db.session.delete(user)
        db.session.delete(employee)
        db.session.delete(company)
        db.session.commit()

        return {
            'success':True
        }




    # ---------
    # post job
    # --------

    @app.post('/company/job')
    @requires_auth('company')
    def post_a_job(jwt):
        data = request.get_json()
        
        name = data.get('name')
        description = data.get('name')
        image = data.get('name')
        slug = data.get('name')
        job_type = data.get('name')
        status = data.get('name')
        country = data.get('name')
        city = data.get('name')
        expereince = data.get('name')
        expiredDate = data.get('name')


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
