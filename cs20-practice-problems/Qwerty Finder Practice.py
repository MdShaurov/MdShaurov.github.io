def qwerty_finder(word):
    new_word = ""
    letters = "qwertyQWERTY"
    for i in range(len(word)):
        new_word += word[i]
        for x in new_word:
            if x in letters:
                return len(new_word) - 1
    return -1