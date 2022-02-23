#######################################################
# Md Shaurov
# Computer Science 20
# May 31, 2020
# 
# Madlib Creation Program
# Purpose: To create a madlib by taking user input
#######################################################

import easygui_qt as easy
import os
import random

# User input for which madlib to choose
madlibs = ["Old Macdonald Had A Farm", "Humpty Dumpty"]
chosen_madlib = easy.get_choice("Choose a rhyme to modify: ", "Madlib", madlibs)

# User input for words for the madlib
if chosen_madlib == "Old Macdonald Had A Farm":
    adjective = easy.get_string("Enter an adjective:", "Adjective")
    noun = easy.get_string("Enter a noun:", "Noun")
    animal = easy.get_string("Enter the name of an animal:", "Animal")
    sound = easy.get_string("Enter a sound effect in words:", "Sound Effect")
elif chosen_madlib == "Humpty Dumpty":
    first_name = easy.get_string("Enter a first name:", "First Name")
    last_name = easy.get_string("Enter a last name:", "Last Name")
    verb = easy.get_string("Enter a verb (past tense action):", "Verb")
    job_title = easy.get_string("Enter a job title (eg. teacher):", "Job Title")
    animal_plural = easy.get_string("Enter the name of an animal (plural):", "Animals")
else:
    exit()

# Locating the text files in the directory where the project is currently saved
dir_path = os.path.dirname(os.path.realpath(__file__))

for root, dirs, files in os.walk(dir_path):
    for file_name in files:
        if file_name == 'adjective.txt':
              adjective_file = os.path.abspath(os.path.join(root, file_name))
        if file_name == 'noun.txt':
              noun_file = os.path.abspath(os.path.join(root, file_name))
        if file_name == 'animal.txt':
              animal_file = os.path.abspath(os.path.join(root, file_name))
        if file_name == 'sound.txt':
              sound_file = os.path.abspath(os.path.join(root, file_name))
        if file_name == 'first_name.txt':
              first_name_file = os.path.abspath(os.path.join(root, file_name))
        if file_name == 'last_name.txt':
              last_name_file = os.path.abspath(os.path.join(root, file_name))
        if file_name == 'verb.txt':
              verb_file = os.path.abspath(os.path.join(root, file_name))
        if file_name == 'job_title.txt':
              job_title_file = os.path.abspath(os.path.join(root, file_name))
        if file_name == 'animal_plural.txt':
              animal_plural_file = os.path.abspath(os.path.join(root, file_name))
    
# random words used to fill blanks when the user leaves the blank empty or clicks cancel
if chosen_madlib == "Old Macdonald Had A Farm":
    try:
        if adjective:
            if adjective == "":
                adjective = random.choice(open(r"{}".format(adjective_file)).read().split())
        else:
            adjective = random.choice(open(r"{}".format(adjective_file)).read().split())
        if noun:
            if noun == "":
                noun = random.choice(open(r"{}".format(noun_file)).read().split())
        else:
            noun = random.choice(open(r"{}".format(noun_file)).read().split())
        if animal:
            if animal == "":
                animal = random.choice(open(r"{}".format(animal_file)).read().split())
        else:
            animal = random.choice(open(r"{}".format(animal_file)).read().split())
        if sound:
            if sound == "":
                sound = random.choice(open(r"{}".format(sound_file)).read().split())
        else:
            sound = random.choice(open(r"{}".format(sound_file)).read().split())
    # When files are missing from the proper directory it will show error message and close program
    except NameError:
        easy.show_message("Required text files not found in the directory where this program is open.", "Error")
        exit()

# Proper article usage
vowel = 'aeiou'
article_1 = "a"
article_2 = "a"
article_3 = "a"

if chosen_madlib == "Old Macdonald Had A Farm":
    try:
        if noun[0].lower() in vowel:
            article_1 = "an"
        if animal[0].lower() in vowel:
            article_2 = "an"
        if sound[0].lower() in vowel:
            article_3 = "an"
    except IndexError:
        pass
    
# random words used to fill blanks when the user leaves the blank empty or clicks cancel 
if chosen_madlib == "Humpty Dumpty":
    try:
        if first_name:
            if first_name == "":
                first_name = random.choice(open(r"{}".format(first_name_file)).read().split())
        else:
            first_name = random.choice(open(r"{}".format(first_name_file)).read().split())
        if last_name:
            if last_name == "":
                last_name = random.choice(open(r"{}".format(last_name_file)).read().split())
        else:
            last_name = random.choice(open(r"{}".format(last_name_file)).read().split())
        if verb:
            if verb == "":
                verb = random.choice(open(r"{}".format(job_title_file)).read().split())
        else:
            verb = random.choice(open(r"{}".format(job_title_file)).read().split())
        if job_title:
            if job_title == "":
                job_title = random.choice(open(r"{}".format(job_title_file)).read().split())
        else:
            job_title = random.choice(open(r"{}".format(job_title_file)).read().split())
        if animal_plural:
            if animal_plural == "":
                animal_plural = random.choice(open(r"{}".format(animal_plural_file)).read().split())
        else:
            animal_plural = random.choice(open(r"{}".format(animal_plural_file)).read().split())
    # When files are missing from the proper directory it will show error message and close program
    except NameError:
        easy.show_message("Required text files not found in the directory where this program is open.", "Error")
        exit()

# Modifies the rhyme to create a madlilb
if chosen_madlib == "Old Macdonald Had A Farm":
    old_macdonald_had_a_farm = f"""{adjective} Macdonald had {article_1} {noun}, E-I-E-I-O 
and on that {noun} he had {article_2} {animal}, E-I-E-I-O 
with {article_3} {sound} {sound} here and {article_3} {sound} {sound} there, 
here {article_3} {sound} 
there {article_3} {sound} 
everywhere {article_3} {sound} {sound} 
{adjective} Macdonald had {article_1} {noun}, E-I-E-I-O."""

if chosen_madlib == "Humpty Dumpty":
    humpty_dumpty = f"""{first_name} {last_name} {verb} on a wall,
{first_name} {last_name} had a great fall.
All the {job_title}'s {animal_plural} and all the {job_title}'s men
Couldn't put {first_name} together again."""

# Prints the modified chosen madlib
if chosen_madlib == "Old Macdonald Had A Farm":
    easy.show_message(old_macdonald_had_a_farm, f"{adjective} Macdonald Had A {noun}")
if chosen_madlib == "Humpty Dumpty":
    easy.show_message(humpty_dumpty, f"{first_name} {last_name}")