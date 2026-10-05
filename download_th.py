import urllib.request, re, os, ssl
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE
os.makedirs("assets/townhalls", exist_ok=True)

url = "https://clashofclans.fandom.com/wiki/Town_Hall"
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
try:
    html = urllib.request.urlopen(req, context=ctx).read().decode("utf-8")
    for i in range(1, 17):
        # find img src containing Town_Hall{i}.png
        pattern = r"https://static\.wikia\.nocookie\.net/clashofclans/images/[a-f0-9]/[a-f0-9]{2}/Town_Hall" + str(i) + r"\.png"
        matches = re.findall(pattern, html)
        if matches:
            img_url = matches[0]
            print(f"Downloading TH {i}...")
            urllib.request.urlretrieve(img_url, f"assets/townhalls/{i}.png")
        else:
            print(f"TH {i} not found on wiki")
except Exception as e:
    print(f"Error: {e}")

