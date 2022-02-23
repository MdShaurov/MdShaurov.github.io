import library as lib

def jump_over_hurdle():
    turn_left()    # suitable definition
    move()
    repeat 2:
        lib.turn_right()
        move()
    turn_left()

def run_jump_or_finish():
    if at_goal():
        done()  #tells Reeborg to stop
    elif front_is_clear():
        move()  # something
    else:
        jump_over_hurdle()   # something

think(10)
repeat 42:
    run_jump_or_finish()
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

def jump_hurdle():
    move()
    turn_left()
    move()
    repeat 2:
        lib.turn_right()
        move()
    turn_left()
    
def pick_tulip():
    if object_here():
        take()
    else:
        move()
        if wall_in_front():
            turn_left()
            
def pick_apples():
    while object_here():
        take()
    lib.turn_around()

def place_apples():
    while carries_object():
        put()
    lib.turn_around()