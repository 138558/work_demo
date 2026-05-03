def solve():
    import sys
    input = sys.stdin.read
    data = input().split()
    t = int(data[0])
    cases = list(map(int, data[1:]))
    
    for n in cases:
        if n % 2 != 0 or n < 4 or n == 2:
            print(-1)
            continue
        
        max_count = 0
        remaining = n
        max_count = remaining // 4
        rem = remaining % 4
        if rem == 2:
            max_count -= 1
        
        min_count = 0
        remaining = n
        min_count = remaining // 6
        rem = remaining % 6
        if rem == 4:
            min_count += 1
        elif rem == 2:
            min_count -= 2
            min_count += 3
        
        print(min_count, max_count)

if __name__ == "__main__":
    solve()