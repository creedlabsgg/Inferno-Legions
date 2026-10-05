import re

with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

# Dictionary for Fandom -> Local image mapping
image_map = {
    "1/1b/Balloon_info.png": "assets/troop_models/Balloon.png",
    "2/23/Elixir.png": "assets/troop_models/Goblin.png", # Fallback
    "3/30/Gold.png": "assets/troop_models/Goblin.png", # Fallback
    "d/db/Barbarian_King_info.png": "assets/troop_models/Barbarian_King.png",
    "0/08/Archer_Queen_info.png": "assets/troop_models/Archer_Queen.png",
    "e/ed/Grand_Warden_info.png": "assets/troop_models/Grand_Warden.png",
    "7/7d/Royal_Champion_info.png": "assets/troop_models/Royal_Champion.png",
    "0/07/Dragon_info.png": "assets/troop_models/Dragon.png",
    "9/93/P.E.K.K.A_info.png": "assets/troop_models/P.E.K.K.A.png",
    "7/77/Village_scenery_background.png": "assets/vibrant_village_bg.jpg",
    "6/69/Clan_Castle10.png": "assets/troop_models/Barbarian.png", # fallback
    "d/d4/Barbarian_info.png": "assets/troop_models/Barbarian.png",
    "c/c5/Archer_info.png": "assets/troop_models/Archer.png"
}

# Replace all wikia URLs with local ones
for wiki, local in image_map.items():
    content = re.sub(r'https://static\.wikia\.nocookie\.net/clashofclans/images/' + wiki.replace('.', r'\.'), local, content)

# Remove referrerpolicy
content = content.replace('referrerpolicy="no-referrer"', '')

# Fix Symmetry in "Build. Battle. Conquer"
content = content.replace(
    '<div class="floating-troops" style="position:relative; height:400px; max-width:800px; margin:0 auto;">',
    '<div class="floating-troops" style="position:relative; height:150px; max-width:900px; margin:0 auto; display:flex; justify-content:space-between; align-items:center;">'
)
content = content.replace(
    '<img  src="assets/troop_models/Dragon.png" style="position:absolute; left:-50px; top:20px; width:200px; animation: hoverTroop 3s infinite alternate;">',
    '<img src="assets/troop_models/Dragon.png" style="width:200px; animation: hoverTroop 3s infinite alternate;">'
)
content = content.replace(
    '<img  src="assets/troop_models/Balloon.png" style="position:absolute; right:-50px; top:0px; width:250px; animation: hoverTroop 4s infinite alternate-reverse;">',
    '<img src="assets/troop_models/Balloon.png" style="width:250px; animation: hoverTroop 4s infinite alternate-reverse;">'
)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(content)
