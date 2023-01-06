from flask import Blueprint
from ..models import Job,db

jobs = Blueprint('jobs', __name__,url_prefix='/api/v1/jobs')
@jobs.get('/')
def index():
    data = db.session.query.all()
    print(data)
    return 'hello world'