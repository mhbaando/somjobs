from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

class Job(db.Model):
    id= db.Column(db.Integer, primary_key=True, nullable=False)
    name = db.Column(db.Text())
    telephon = db.Column(db.Text())