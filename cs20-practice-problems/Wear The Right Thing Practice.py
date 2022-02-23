def wear_the_right_thing(temperature):
    if temperature < -10:
        return "parka and toque"
    elif temperature >= -10 and temperature <= 0:
        return "toque"
    elif temperature > 0 and temperature < 10:
        return "sweater"
    elif temperature >= 10 and temperature <= 20:
        return "t-shirt"
    elif temperature > 20:
        return "shorts"
    else:
        return "some clothes"