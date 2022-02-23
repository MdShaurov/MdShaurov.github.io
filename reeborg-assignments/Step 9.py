import library as lib

def pick_flowers_on_lawn():
    if object_here():
        take()
    if carries_object():
        if wall_in_front():
            lib.turn_around()
   
def place_flowers():
    repeat 12:
        if at_goal():
            if carries_object():
                move()
                put()
                lib.turn_around()
                move()
                lib.turn_around()
        
def smart_movement():
    repeat 26:
        move()
        pick_flowers_on_lawn()
     
think(10)     
smart_movement()
place_flowers()

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
    
def draw_one():
    think(10)
    put()
    move()
    put()
    move()
    put()
    move()
    put()
    move()
    put()
    think(250)
    
def draw_zero():
    think(10)
    move()
    lib.draw_one()
    turn_left()
    move()
    put()
    move()
    turn_left()
    lib.draw_one()
    turn_left()
    move()
    put()
    move()
    lib.turn_right()
    move()
    think(250)