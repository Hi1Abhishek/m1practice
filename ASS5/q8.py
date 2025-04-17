def get_string_lists(lst):
    return list(filter(lambda x: isinstance(x, str), lst))

mixed = ['hello', 123, True, 'world', 5.5, 'Python']
print("String items:", get_string_lists(mixed))
