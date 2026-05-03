t = int(input())

for _ in range(t):
    x, n = map(int, input().split())
    print(0 if n % 2 == 0 else x)