import re

def fix_css():
    with open('styles.css', 'r', encoding='utf-8') as f:
        css = f.read()

    # 1. Fix .hero-model so it doesn't get cut off but stays within the card, OR allow the card to have overflow visible.
    # We want overflow hidden on the card so the top banner stays rounded. 
    # The best fix is to make the hero model smaller.
    css = re.sub(
        r'\.hero-model\s*\{[^}]*\}',
        '.hero-model {\n  position: absolute;\n  bottom: 30px;\n  height: 180px;\n  max-width: 90%;\n  object-fit: contain;\n  z-index: 2;\n  filter: drop-shadow(0 10px 10px rgba(0,0,0,0.5));\n}',
        css
    )

    # 2. Fix .pekka-bg-text to fit the screen better
    css = re.sub(
        r'\.pekka-bg-text\s*\{[^}]*\}',
        '.pekka-bg-text {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-family: \'Luckiest Guy\', cursive;\n  font-size: 10vw;\n  color: #fff;\n  opacity: 0.1;\n  text-shadow: 0 0 50px rgba(255,255,255,0.2);\n  white-space: nowrap;\n  pointer-events: none;\n  z-index: 1;\n}',
        css
    )
    
    # 3. Add max-width to floating troops so they don't break flex layout
    css += "\n.floating-troops img { max-width: 45%; object-fit: contain; }\n"
    
    # 4. Make carousel items strictly row
    css += "\n.troop-carousel { flex-wrap: nowrap !important; justify-content: flex-start !important; }\n"

    # 5. Fix the background text in Build Battle Conquer
    css = re.sub(
        r'\.background-text\s*\{[^}]*\}',
        '.background-text {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-family: \'Luckiest Guy\', cursive;\n  font-size: 10vw;\n  color: rgba(0, 0, 0, 0.03);\n  white-space: nowrap;\n  pointer-events: none;\n  z-index: 1;\n}',
        css
    )

    # Fix grass platform in hero card to align perfectly
    css = re.sub(
        r'\.grass-platform\s*\{[^}]*\}',
        '.grass-platform {\n  width: 140px;\n  height: 40px;\n  background: #4caf50;\n  border-radius: 50%;\n  border-bottom: 15px solid #388e3c;\n  box-shadow: 0 10px 20px rgba(0,0,0,0.3);\n  position: absolute;\n  bottom: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n}',
        css
    )

    with open('styles.css', 'w', encoding='utf-8') as f:
        f.write(css)

def fix_html():
    with open('index.html', 'r', encoding='utf-8') as f:
        html = f.read()

    # Hide duplicate nav in cinematic frame
    html = html.replace('<div class="frame-nav">', '<div class="frame-nav" style="display:none;">')
    
    # Fix Balloon image size in header
    html = re.sub(
        r'<img  src="assets/troop_models/Balloon\.png" alt="Balloon" class="balloon-troop">',
        '<img src="assets/troop_models/Balloon.png" alt="Balloon" class="balloon-troop" style="max-height:400px; width:auto; object-fit:contain; filter:drop-shadow(0 20px 30px rgba(0,0,0,0.5));">',
        html
    )

    # Hide elixir and gold glass panels because we don't have good icons for them and they overlap
    html = html.replace('<div class="glass-panel elixir-panel">', '<div class="glass-panel elixir-panel" style="display:none;">')
    html = html.replace('<div class="glass-panel gold-panel">', '<div class="glass-panel gold-panel" style="display:none;">')
    
    # Adjust Build Battle Conquer container
    html = html.replace(
        '<div class="floating-troops" style="position:relative; height:150px; max-width:900px; margin:0 auto; display:flex; justify-content:space-between; align-items:center;">',
        '<div class="floating-troops" style="position:relative; min-height:300px; max-width:900px; margin:0 auto; display:flex; justify-content:space-between; align-items:center;">'
    )
    
    # Adjust PEKKA stat pointers to actually point at the center
    # DPS (top left) -> points down-right
    html = html.replace(
        '<div class="stat-pointer" style="top:20%; left:15%;">\n          <div class="stat-bubble" id="showcase-dps-text">DPS: 680</div>\n          <div class="stat-line" style="width:120px; transform:rotate(30deg); transform-origin:left center; background:#ff9800; height:2px; position:absolute; top:25px; left:100%;"></div>\n          <div class="stat-dot" style="left:calc(100% + 100px); top:85px; position:absolute; width:10px; height:10px; border-radius:50%; background:#ff9800; box-shadow:0 0 10px #ff9800;"></div>\n        </div>',
        '<div class="stat-pointer" style="top:15%; left:10%;">\n          <div class="stat-bubble" id="showcase-dps-text">DPS: 680</div>\n          <div class="stat-line" style="width:200px; transform:rotate(25deg); transform-origin:left center; background:#ff9800; height:2px; position:absolute; top:50%; left:100%;"></div>\n          <div class="stat-dot" style="left:calc(100% + 195px); top:calc(50% + 80px); position:absolute; width:10px; height:10px; border-radius:50%; background:#ff9800; box-shadow:0 0 10px #ff9800;"></div>\n        </div>'
    )
    
    # HP (bottom left) -> points up-right
    html = html.replace(
        '<div class="stat-pointer" style="bottom:25%; left:10%;">\n          <div class="stat-bubble" id="showcase-hp-text">HP: 6700</div>\n          <div class="stat-line" style="width:160px; transform:rotate(-25deg); transform-origin:left center; background:#4caf50; height:2px; position:absolute; top:25px; left:100%;"></div>\n          <div class="stat-dot" style="left:calc(100% + 140px); top:-40px; position:absolute; width:10px; height:10px; border-radius:50%; background:#4caf50; box-shadow:0 0 10px #4caf50;"></div>\n        </div>',
        '<div class="stat-pointer" style="bottom:15%; left:10%;">\n          <div class="stat-bubble" id="showcase-hp-text">HP: 6700</div>\n          <div class="stat-line" style="width:200px; transform:rotate(-25deg); transform-origin:left center; background:#4caf50; height:2px; position:absolute; top:50%; left:100%;"></div>\n          <div class="stat-dot" style="left:calc(100% + 180px); top:calc(50% - 90px); position:absolute; width:10px; height:10px; border-radius:50%; background:#4caf50; box-shadow:0 0 10px #4caf50;"></div>\n        </div>'
    )

    # Elixir (top right) -> points down-left
    html = html.replace(
        '<div class="stat-pointer" style="top:40%; right:15%;">\n          <div class="stat-bubble" id="showcase-elixir-text">ELIXIR: 25k</div>\n          <div class="stat-line" style="width:140px; transform:rotate(160deg); transform-origin:right center; background:#e91e63; height:2px; position:absolute; top:25px; right:100%;"></div>\n          <div class="stat-dot" style="right:calc(100% + 130px); top:70px; position:absolute; width:10px; height:10px; border-radius:50%; background:#e91e63; box-shadow:0 0 10px #e91e63;"></div>\n        </div>',
        '<div class="stat-pointer" style="top:15%; right:10%;">\n          <div class="stat-bubble" id="showcase-elixir-text">ELIXIR: 25k</div>\n          <div class="stat-line" style="width:200px; transform:rotate(155deg); transform-origin:right center; background:#e91e63; height:2px; position:absolute; top:50%; right:100%;"></div>\n          <div class="stat-dot" style="right:calc(100% + 185px); top:calc(50% + 80px); position:absolute; width:10px; height:10px; border-radius:50%; background:#e91e63; box-shadow:0 0 10px #e91e63;"></div>\n        </div>'
    )

    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(html)

fix_css()
fix_html()
print("Done")
