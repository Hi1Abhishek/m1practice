class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def delete_kth_node(head, k, count=1):
    if not head:
        return None
    if k == 1:
        return head.next
    if count == k - 1 and head.next:
        head.next = head.next.next
        return head
    head.next = delete_kth_node(head.next, k, count + 1)
    return head

def print_list(head):
    while head:
        print(head.data, end=" -> ")
        head = head.next
    print("None")

# Input from user
n = int(input("Enter number of nodes: "))
values = list(map(int, input("Enter values: ").split()))
k = int(input("Enter position to delete: "))

head = Node(values[0])
current = head
for val in values[1:]:
    current.next = Node(val)
    current = current.next

print("Original list:")
print_list(head)

head = delete_kth_node(head, k)

print(f"List after deleting {k}-th node:")
print_list(head)