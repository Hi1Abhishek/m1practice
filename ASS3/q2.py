# def date_match(date_str):
#     from datetime import datetime
  
#     y, m, d = map(int, date_str.split("-"))
    
#     def is_leap(year):
#         return (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)

#     if is_leap(y) and m == 2:
#         return "Leap year"
#     elif m == 12 and d == 25:
#         return "Christmas"
#     else:
#         return "Regular day"

# print(date_match( "2024-02-15"))  # Output: Leap year


def date_match():
    date_str = input("Enter date (YYYY-MM-DD): ")
    y, m, d = map(int, date_str.split("-"))
    if (y % 4 == 0 and y % 100 != 0 or y % 400 == 0) and m == 2:
        return "Leap year"
    if m == 12 and d == 25:
        return "Christmas"
    return "Regular day"

print(date_match())
