import library as lib

lib.turn_right()
move()
move()

turn_left()
move()
move()
move()

turn_left()
move()
move()
take()

lib.turn_around()
move()
move()
lib.turn_right()

move()
move()
move()
lib.turn_right()

move()
move()
put()
################################################################
# WARNING: Do not change this comment.
# Library Code is below.
################################################################
def turn_around():
    turn_left()
    turn_left()
    
def turn_right():
    turn_left()
    turn_left()
    turn_left()
    
def pick_two_berries():
    move()
    take()
    move()
    take()
    turn_left()
    turn_left()
    move()
    move()
    put()
    put()
    turn_left()