def shape_match(shape):
    match shape.lower():
        case "circle":
            return "Round shape"
        case "square" | "rectangle":
            return "Four-sided shape"
        case "triangle":
            return "Three- sided shape"
        case _:
            return "Unknown shape"

print(shape_match("Rectangle"))  # Output: Four-sided shape