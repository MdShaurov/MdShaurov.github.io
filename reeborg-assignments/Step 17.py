import library as lib

def forward():
    if front_is_clear():
        move()
        if right_is_clear():
            lib.turn_right()
    if wall_in_front():
        while wall_in_front():
            turn_left()

think(10)
while not at_goal():
    forward()
################################################################
# WARNING: Do not change this comment.
# Library Code is below.
################################################################
def turn_right():
    repeat 3:
        turn_left()

def turn_around():
    repeat 2:
        turn_left()