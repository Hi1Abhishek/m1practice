def find_combinations(arr, target):
    result = []
    arr.sort()

    def backtrack(start, path, total):
        if total == target:
            result.append(path)
            return
        if total > target:
            return
        for i in range(start, len(arr)):
            if i > start and arr[i] == arr[i - 1]:  # Skip duplicates
                continue
            backtrack(i + 1, path + [arr[i]], total + arr[i])

    backtrack(0, [], 0)
    return result

arr = list(map(int, input("Enter list elements: ").split()))
target = int(input("Enter target sum: "))

combinations = find_combinations(arr, target)
print("Combinations that sum to target:")
for combo in combinations:
    print(combo)