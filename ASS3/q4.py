def string_match(s):
    s = s.lower()
    if s[0] in 'aeiou':
        return "Starts with a vowel"
    elif s[-1].isdigit():
        return "Ends with a digit"
    elif "python" in s:
        return "Contains 'python'"
    else:
        return "No match found"

print(string_match("Apple"))      # Starts with a vowel
print(string_match("hello9"))     # Ends with a digit
print(string_match("I love python!"))  # Contains 'python'