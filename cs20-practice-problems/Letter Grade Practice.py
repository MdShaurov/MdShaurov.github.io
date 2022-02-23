def letter_grade(exam_grade):
    if exam_grade >= 90:
        return "A"
    if exam_grade >= 80 and exam_grade < 90:
        return "B"
    if exam_grade >= 70 and exam_grade < 80:
        return "C"
    if exam_grade >= 60 and exam_grade < 70:
        return "D"
    if exam_grade < 60:
        return "F"

