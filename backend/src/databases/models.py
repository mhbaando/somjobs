import os
from flask_sqlalchemy import SQLAlchemy
from uuid import uuid4
from datetime import datetime

db = SQLAlchemy()

def get_uuid():
    return uuid4().hex

class Employee(db.Model):
    __tablename__ = 'employee'
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    full_name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(345), nullable=False)
    phone = db.Column(db.String(22), nullable=False)
    title= db.Column(db.Text, nullable=False)
    country = db.Column(db.String(9), nullable=False)
    city = db.Column(db.String(12),nullable=False)
    summary = db.Column(db.Text)
    github_link = db.Column(db.Text)
    linkedin_link = db.Column(db.Text)
    image = db.Column(db.LargeBinary)
    cv_name = db.Column(db.String(12))
    cv = db.Column(db.LargeBinary)
    company = db.relationship("Company", backref="employee", lazy=True)
    user = db.relationship("User", backref="employee", lazy=True)
    created_at = db.Column(db.DateTime, default=datetime.now(), nullable=False)


class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.String(64), primary_key=True, unique=True, default=get_uuid())
    email = db.Column(db.String(345), unique=True)
    password = db.Column(db.Text, nullable=False)
    role = db.Column(db.String(15), nullable=False)
    owner =  db.Column(db.Integer, db.ForeignKey('employee.id'))
    created_at = db.Column(db.DateTime, default=datetime.now(), nullable=False)


    def format(self):
        return {
            "user_id":self.id,
            "user_email":self.email,
            "user_created_at":self.created_at,
            "user_role" : self.role,
        }



class Company(db.Model):
    __tablename__ = 'company'
    id = db.Column(db.Integer, primary_key=True, unique=True)
    name = db.Column(db.String(20),nullable=False)
    email = db.Column(db.String(20),nullable=False)
    website = db.Column(db.String(100),nullable=False)
    country = db.Column(db.String(9),nullable=False)
    city = db.Column(db.String(12),nullable=False)
    image = db.Column(db.LargeBinary)
    created_at = db.Column(db.DateTime, default=datetime.now(), nullable=False)
    user = db.Column(db.Integer, db.ForeignKey('employee.id'))