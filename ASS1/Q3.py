nums = sorted([int(input()) for _ in range(int(input("How many numbers? ")))])

mid = len(nums) // 2
median = (nums[mid] if len(nums) % 2 != 0 
          else (nums[mid - 1] + nums[mid]) / 2)

print("Median:", median)