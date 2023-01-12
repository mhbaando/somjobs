import os
from datetime import datetime
from uuid import uuid4

import sqlalchemy.dialects.postgresql as postgresql
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def get_uuid():
    return uuid4().hex

class Employee(db.Model):
    __tablename__ = "employee"
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    full_name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(345), nullable=False)
    phone = db.Column(db.String(22), nullable=False)
    title = db.Column(db.Text, nullable=False)
    country = db.Column(db.String(9), nullable=False)
    city = db.Column(db.String(12), nullable=False)
    summary = db.Column(db.Text)
    github_link = db.Column(db.Text)
    linkedin_link = db.Column(db.Text)
    image = db.Column(db.Text)
    cv_name = db.Column(db.String(12))
    cv = db.Column(db.LargeBinary)
    company = db.relationship("Company", backref="employee", lazy=True)
    user = db.relationship("User", backref="employee", lazy=True)
    created_at = db.Column(db.DateTime, default=datetime.now(), nullable=False)
    jobs = db.relationship("Job", backref="employee", lazy=True)

    def format(self):
        return {
            "id": self.id,
            "full_name": self.full_name,
            "email": self.email,
            "phone": self.phone,
            "title": self.title,
            "country": self.country,
            "city": self.city,
            "summary": self.summary,
            "github_link": self.github_link,
            "linkedin_link": self.linkedin_link,
            "image": self.image,
            "cv_name": self.cv_name,
            "cv": self.cv,
            "created_at": self.created_at,
        }


class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(345), unique=True)
    password = db.Column(db.Text, nullable=False)
    role = db.Column(db.String(15), nullable=False)
    owner = db.Column(db.Integer, db.ForeignKey("employee.id"))
    created_at = db.Column(db.DateTime, default=datetime.now(), nullable=False)

    def format(self):
        return {
            "user_id": self.id,
            "user_email": self.email,
            "user_created_at": self.created_at,
            "user_role": self.role,
        }


class Company(db.Model):
    __tablename__ = "company"
    id = db.Column(db.Integer, primary_key=True, unique=True)
    name = db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(20), nullable=False)
    website = db.Column(db.String(100), nullable=False)
    country = db.Column(db.String(9), nullable=False)
    city = db.Column(db.String(12), nullable=False)
    image = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=datetime.now(), nullable=False)
    user = db.Column(db.Integer, db.ForeignKey("employee.id"))
    jobs = db.relationship("Job", backref="company", lazy=True)


    def format(self):
        return {
            "id": self.id,
            "name": self.name,
            "email":self.email,
            "website":self.website,
            "country": self.country,
            "city": self.city,
            "image": self.image,
        }


class Job(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True)
    name = db.Column(db.Text, nullable=False)
    description = db.Column(db.Text)
    image = db.Column(db.Text)
    slug = db.Column(db.Text)
    city = db.Column(db.String(10))
    status = db.Column(db.String(20))
    country = db.Column(db.String(10))
    job_type = db.Column(db.String(32))
    expereince = db.Column(db.String(10))
    expiredDate = db.Column(db.DateTime, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now(), nullable=False)
    applied_user = db.Column(db.Integer, db.ForeignKey("employee.id"))
    posted_user = db.Column(db.Integer, db.ForeignKey("company.id"))