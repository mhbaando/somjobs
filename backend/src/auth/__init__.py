import jwt
import os

from functools import wraps
from flask import abort, request

class AuthError(Exception):
    def __init__(self, error, status_code):
        self.error = error
        self.status_code = status_code


# check auth header
def get_token_auth_header():
    # get the the header from the request
    aut_header = request.headers.get("Authorization").split(" ") if request.headers.get("Authorization")  else ''

    # check if the header is bearer token
    if len(aut_header) != 2:
        abort(401)
    elif aut_header[0].lower() != "bearer":
        abort(401)

    # return token at the end
    return aut_header[1]


# check rol or permission
def check_permissions(permission, payload):
    if "role" not in payload:
        print(payload)
        abort(401)
    if permission not in payload.get("role"):
        abort(403)
    return True


def verify_decode_jwt(token):
    SECRET_KEY=os.environ.get('SECRET_KEY')
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
        return payload
    except jwt.ExpiredSignatureError:
        return {"success": False, 'message': "Expired token"}
    except jwt.InvalidTokenError:
        return {"success": False, 'message': "Invalid Token"}


def requires_auth(permission="",):
    def requires_auth_decorator(f):
        @wraps(f)
        def wrapper(*args, **kwargs):
            token = get_token_auth_header()
            payload = verify_decode_jwt(token)
            check_permissions(permission, payload)
            return f(payload, *args, **kwargs)

        return wrapper

    return requires_auth_decorator
