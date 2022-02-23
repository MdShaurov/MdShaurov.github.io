import library as lib

def move_around_lake():
    if front_is_clear():
        move()
    else:
        turn_left()

think(10)
put()
while True:
    move_around_lake()
    if object_here():
        done()
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
    
def run_jump_or_finish():
    if at_goal():
        done()
    elif front_is_clear():
        move()  
    else:
        jump_over_hurdle()
        

def double_move() : 
    move()
    move()

def triple_move() :
    move()
    move()
    move()