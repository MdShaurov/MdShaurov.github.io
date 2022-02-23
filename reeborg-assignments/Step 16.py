import library as lib

def forward():
    if object_here():
        take()
    move()

def downwards():
    lib.turn_right()
    forward()
    lib.turn_right()
    
def upwards():
    turn_left()
    forward()
    turn_left()
    
think(10)
move()
move()
turn_left()

repeat 7:
    forward()
downwards()
repeat 5:
    forward()
upwards()

repeat 5:
    forward()
downwards()
repeat 5:
    forward()
upwards()

repeat 5:
    forward()
downwards()
repeat 7:
    forward()
    
turn_left()
move()
while carries_object():
    put()
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