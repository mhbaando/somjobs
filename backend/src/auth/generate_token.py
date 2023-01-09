import jwt
import os
import datetime

def generate_token(user):
    SECRET_KEY=os.environ.get('SECRET_KEY')

    payload = {
            'exp': datetime.datetime.utcnow() + datetime.timedelta(days=2, seconds=5),
            'iat': datetime.datetime.utcnow(),
            'sub': user.id,
            'role': user.role, 
            'email':user.email,
            'owner':user.owner if user.owner else '',
        }
    return jwt.encode(
            payload,
            SECRET_KEY,
            algorithm='HS256'
        )