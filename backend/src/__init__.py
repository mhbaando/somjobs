import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

# our defined modules
from .jobs.blueprint import jobs
from .jobs.models import Job, db


def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)
    app.app_context().push()
    DB_USER = os.environ.get('DB_USER')
    DB_HOST = os.environ.get('DB_HOST')
    DB = os.environ.get('DB')

    if test_config is None:
        app.config.from_mapping(
           SQLALCHEMY_DATABASE_URI = f'postgresql://{DB_USER}@{DB_HOST}:5432/{DB}'
        )
        
        db.init_app(app)
        migrate = Migrate(app,db)


    else:
        app.config.from_mapping(test_config)
    
    # register our blue print
    app.register_blueprint(jobs)
    return app