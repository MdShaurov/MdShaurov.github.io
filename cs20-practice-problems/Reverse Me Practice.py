def reverse_me(word):
    new_word = ""
    for i in range(len(word)):
        new_word = word[i] + new_word
    return new_word