def apply_to_triangular(n, func):
    triangular = [i * (i + 1) // 2 for i in range(1, n + 1)]
    return list(map(func, triangular))

# Example: Square each triangular number
print(apply_to_triangular(5, lambda x: x**2))  # Output: [1, 9, 36, 100, 225]