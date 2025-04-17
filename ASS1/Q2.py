def is_prime(n, d=2):
    if n <= 2:
        return n == 2
    if n % d == 0:
        return False
    if d * d > n:
        return True
    return is_prime(n, d + 1)

n = int(input("Enter number of elements: "))
lst = [int(input()) for _ in range(n)]
primes = [x for x in lst if is_prime(x)]
print("Original list:", lst)
print("Prime numbers:", primes)
