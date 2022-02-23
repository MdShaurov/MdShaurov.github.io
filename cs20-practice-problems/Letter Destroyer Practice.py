def letter_destroyer(word, letter_to_destroy):
    new_word = ""
    for i in word:
        if not letter_to_destroy == i:
            new_word += i        
    return new_word

