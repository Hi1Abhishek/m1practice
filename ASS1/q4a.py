s = input("Enter string: ").lower()
vowels = {'a', 'e', 'i', 'o', 'u'}
if vowels <= set(s):
    print("String contains all vowels")
else:
    print("Missing some vowels")