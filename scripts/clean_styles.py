import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

html = re.sub(r'class="hero-banner"\s+style="background:[^"]+"', 'class="hero-banner"', html)
html = re.sub(r'class="hero-card-footer"\s+style="background:[^"]+"', 'class="hero-card-footer"', html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
