def password_length(password):
    if len(password) <= 32 and len(password) >= 8:
        return True
    else:
        return False