import urllib.request
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

urls = {
    'bg_wars.jpg': 'https://c4.wallpaperflare.com/wallpaper/798/28/672/clash-of-clans-town-hall-9-wallpaper-preview.jpg',
    'bg_troops.jpg': 'https://c4.wallpaperflare.com/wallpaper/934/54/655/clash-of-clans-archer-barbarian-goblin-wallpaper-preview.jpg',
    'bg_rules.jpg': 'https://c4.wallpaperflare.com/wallpaper/132/893/816/clash-of-clans-pekka-wizard-hog-rider-wallpaper-preview.jpg',
    'bg_events.jpg': 'https://c4.wallpaperflare.com/wallpaper/930/162/481/clash-of-clans-1080p-2k-4k-5k-hd-wallpaper-preview.jpg'
}

req_headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5'
}

for filename, url in urls.items():
    try:
        req = urllib.request.Request(url, headers=req_headers)
        with urllib.request.urlopen(req, context=ctx) as response:
            with open(f'assets/{filename}', 'wb') as f:
                f.write(response.read())
        print(f"Downloaded {filename}")
    except Exception as e:
        print(f"Failed to download {filename}: {e}")
