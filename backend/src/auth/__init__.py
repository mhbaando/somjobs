from flask import request, abort
from functools import wraps

class AuthError(Exception):
    def __init__(self, error, status_code):
        self.error = error
        self.status_code = status_code


# check auth header 
def get_token_auth_header():
    # get the the header from the request
    aut_header = request.headers.get("Authorization").split(" ")

    # check if the header is bearer token
    if len(aut_header) != 2:
        abort(401)
    elif aut_header[0].lower() != "bearer":
        abort(401)

    # return token at the end
    return aut_header[1]

# check rol or permission
def check_permissions(permission, payload):
    if "permissions" not in payload:
        abort(401)
    if permission not in payload.get("permissions"):
        abort(403)
    return True