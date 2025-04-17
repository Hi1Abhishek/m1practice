def with_radius(f):
    def wrapper(r):
        return f(r)
    return wrapper

@with_radius
def circumference(r):
    return 2 * 3.1416 * r

print(circumference(7))  # Output: 43.9824