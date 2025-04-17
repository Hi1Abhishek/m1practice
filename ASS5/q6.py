countries = ['India', 'Nepal', 'Germany', 'Australia', 'USA', 'Mexico']
filtered = list(filter(lambda x: len(x) >= 6, countries))
print("Countries with 6 or more letters:", filtered)
