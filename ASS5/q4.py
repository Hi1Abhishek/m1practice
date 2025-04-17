def filter_names(names, substring):
    for name in names:
        if substring.lower() in name.lower():
            yield name

names = ["Alice", "Bob", "Charlie", "David", "Carla"]
substr = input("Enter substring to filter names: ")

for name in filter_names(names, substr):
    print(name)