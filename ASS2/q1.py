add = lambda x, y: x + y
print(add(5, 3))  # Output: 8



is_even = lambda x: x % 2 == 0
print(is_even(4))  # Output: True



from functools import reduce
fact = lambda n: reduce(lambda x, y: x * y, range(1, n + 1)) if n > 0 else 1
print(fact(5))  # Output: 120


maximum = lambda lst: max(lst)
print(maximum([1, 5, 3, 9, 2]))  # Output: 9