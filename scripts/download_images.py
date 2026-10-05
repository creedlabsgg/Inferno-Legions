import urllib.request
import os

images = {
    "barbarian.png": "https://static.wikia.nocookie.net/clashofclans/images/d/d4/Barbarian_info.png",
    "archer.png": "https://static.wikia.nocookie.net/clashofclans/images/c/c5/Archer_info.png",
    "giant.png": "https://static.wikia.nocookie.net/clashofclans/images/1/18/Giant_info.png",
    "goblin.png": "https://static.wikia.nocookie.net/clashofclans/images/4/4b/Goblin_info.png",
    "wallbreaker.png": "https://static.wikia.nocookie.net/clashofclans/images/c/c4/Wall_Breaker_info.png",
    "balloon.png": "https://static.wikia.nocookie.net/clashofclans/images/1/1b/Balloon_info.png",
    "wizard.png": "https://static.wikia.nocookie.net/clashofclans/images/d/df/Wizard_info.png",
    "healer.png": "https://static.wikia.nocookie.net/clashofclans/images/d/d0/Healer_info.png",
    "dragon.png": "https://static.wikia.nocookie.net/clashofclans/images/0/07/Dragon_info.png",
    "pekka.png": "https://static.wikia.nocookie.net/clashofclans/images/9/93/P.E.K.K.A_info.png",
    "babydragon.png": "https://static.wikia.nocookie.net/clashofclans/images/e/ea/Baby_Dragon_info.png",
    "miner.png": "https://static.wikia.nocookie.net/clashofclans/images/0/07/Miner_info.png",
    "electrodragon.png": "https://static.wikia.nocookie.net/clashofclans/images/3/3b/Electro_Dragon_info.png",
    "yeti.png": "https://static.wikia.nocookie.net/clashofclans/images/a/a2/Yeti_info.png",
    "clan_castle.png": "https://static.wikia.nocookie.net/clashofclans/images/6/69/Clan_Castle10.png",
    "badge.png": "https://static.wikia.nocookie.net/clashofclans/images/3/30/Level_11_Clan_Badge.png",
    
    # Heroes
    "barbarian_king.png": "https://static.wikia.nocookie.net/clashofclans/images/2/25/Barbarian_King_info.png",
    "archer_queen.png": "https://static.wikia.nocookie.net/clashofclans/images/7/7b/Archer_Queen_info.png",
    "grand_warden.png": "https://static.wikia.nocookie.net/clashofclans/images/5/52/Grand_Warden_info.png",
    "royal_champion.png": "https://static.wikia.nocookie.net/clashofclans/images/7/77/Royal_Champion_info.png"
}

out_dir = r"C:\Users\Admin\Documents\Clash OF Clans\Clan - Inferno Legions\assets\troops"
os.makedirs(out_dir, exist_ok=True)

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
    'Referer': 'https://clashofclans.fandom.com/'
}

for name, url in images.items():
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as response:
            content = response.read()
            with open(os.path.join(out_dir, name), "wb") as f:
                f.write(content)
        print(f"Downloaded {name}")
    except Exception as e:
        print(f"Failed {name}: {e}")
