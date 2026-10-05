import re

with open('troopsData.js', 'r', encoding='utf-8') as f:
    content = f.read()

def replace_image(match):
    name = match.group(1)
    file_name = name.replace(' ', '_') + '.png'
    return f'name: "{name}",\n    type: {match.group(2)},\n    color: {match.group(3)},\n    image: "assets/troop_models/{file_name}"'

pattern = r'name:\s*"(.*?)",\s*type:\s*(.*?),\s*color:\s*(.*?),\s*image:\s*".*?"'
new_content = re.sub(pattern, replace_image, content)

with open('troopsData.js', 'w', encoding='utf-8') as f:
    f.write(new_content)
