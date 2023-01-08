import jwt
import datetime

def generate_token(user,app):
    payload = {
            'exp': datetime.datetime.utcnow() + datetime.timedelta(days=0, seconds=5),
            'iat': datetime.datetime.utcnow(),
            'sub': user.id,
            'role': user.role, 
            'email':user.email,
            'company':'',
        }
    return jwt.encode(
            payload,
            app.config.get('SECRET_KEY'),
            algorithm='HS256'
        )