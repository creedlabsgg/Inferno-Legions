with open('index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Remove lines 90 to 176 (index 89 to 175)
del lines[89:176]

with open('index.html', 'w', encoding='utf-8') as f:
    f.writelines(lines)
