def power(x):
    return lambda y: x ** y

pow3 = power(2)
print(pow3(3))  # Output: 8