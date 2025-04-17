def find_largest(lst):
    return max(lst)

lst = [int(input()) for _ in range(int(input("Enter count: ")))]
print("Largest:", find_largest(lst))
