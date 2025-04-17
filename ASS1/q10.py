import math
from functools import reduce

lst = list(map(int, input("Enter numbers: ").split()))

def gcd_list(l): return reduce(math.gcd, l)
def lcm(a, b): return a * b // math.gcd(a, b)
def lcm_list(l): return reduce(lcm, l)

print("GCD:", gcd_list(lst))
print("LCM:", lcm_list(lst))