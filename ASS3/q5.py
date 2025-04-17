from collections import Counter

def mode_of_list(lst):
    return max(Counter(lst).items(), key=lambda x: x[1])[0]

print(mode_of_list([1, 2, 3, 2, 4, 2, 5]))  # Output: 2