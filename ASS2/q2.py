is_palindrome = lambda s: s == s[::-1]
print(is_palindrome("madam"))  # Output: True


sort_strings = lambda lst: sorted(lst)
print(sort_strings(["banana", "apple", "cherry"]))  # Output: ['apple', 'banana', 'cherry']


area_triangle = lambda b, h: 0.5 * b * h
print(area_triangle(10, 5))  # Output: 25.0



is_sublist = lambda small, big: any(small == big[i:i+len(small)] for i in range(len(big)-len(small)+1))
print(is_sublist([2, 3], [1, 2, 3, 4]))  # Output: True

