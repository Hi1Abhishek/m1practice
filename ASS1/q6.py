def find_duplicates(lst):
    return list(set([x for x in lst if lst.count(x) > 1]))

print(find_duplicates([1, 2, 3, 2, 4, 5, 1]))