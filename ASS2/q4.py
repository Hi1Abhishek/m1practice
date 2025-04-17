def check_palindrome():
    return lambda s: s == s[::-1]

pal = check_palindrome()
print(pal("racecar"))  # Output: True
