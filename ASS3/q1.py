def temperature_match(temp):
    if temp > 30:
        return "Hot"
    elif 20 <= temp <= 30:
        return "Moderate"
    else:
        return "Cold"

print(temperature_match(25))  # Output: Moderate