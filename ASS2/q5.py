import math

def hypotenuse(a):
    return lambda b: math.sqrt(a**2 + b**2)

hyp = hypotenuse(3)
print(hyp(4))  # Output: 5.0