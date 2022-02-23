import library as lib

def checking():
    if right_is_clear():
            lib.turn_around()
            move()
            if is_facing_north():
               turn_left()
               move()
            else:
                turn_left()
                move()
                turn_left()
    else:
        lib.turn_around()
        move()
        lib.turn_around()
        
def hugging_wall():
    if front_is_clear():
        move()
        if not at_goal():
            if right_is_clear():
                move()
                checking()
            if right_is_clear(): 
                lib.turn_right()
                build_wall()
                turn_left()
    if wall_in_front():
        turn_left()

think(10)
repeat 3:
    move()
lib.turn_right()
move()
while not at_goal():
    hugging_wall()
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
        
def move_around_lake():
    if front_is_clear():
        move()
    else:
        turn_left()