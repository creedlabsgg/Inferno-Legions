import re

# 1. REMOVE FROM index.html
with open('index.html', 'r', encoding='utf-8') as f:
    index_html = f.read()

# Extract pekka-section
pekka_match = re.search(r'<!-- ========== TROOP SHOWCASE ========== -->\s*<section class="pekka-section.*?</section>', index_html, re.DOTALL)
if pekka_match:
    pekka_section = pekka_match.group(0)
    # Remove from index.html
    index_html = index_html.replace(pekka_section, '')
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(index_html)
else:
    print("PEKKA section not found in index.html")

# 2. FIX STAT POINTERS IN PEKKA SECTION HTML
if pekka_match:
    # Instead of complex math, just use absolute flex positioning for the bubbles, no lines
    new_stats_html = '''
          <!-- Stat Bubbles -->
          <div style="position:absolute; top:20%; left:10%; z-index:10;">
            <div class="stat-bubble" id="showcase-dps-text" style="font-size:1.2rem; padding:10px 20px;">DPS: 680</div>
          </div>
          <div style="position:absolute; bottom:20%; left:10%; z-index:10;">
            <div class="stat-bubble" id="showcase-hp-text" style="font-size:1.2rem; padding:10px 20px;">HP: 6700</div>
          </div>
          <div style="position:absolute; top:20%; right:10%; z-index:10;">
            <div class="stat-bubble" id="showcase-elixir-text" style="font-size:1.2rem; padding:10px 20px;">ELIXIR: 25k</div>
          </div>
'''
    # Replace the old stat pointers
    pekka_section = re.sub(r'<!-- Stat Lines -->.*?</div>\s*</div>\s*</div>', new_stats_html, pekka_section, flags=re.DOTALL)
    
    # Clean up any leftover stat-pointers
    pekka_section = re.sub(r'<div class="stat-pointer".*?</div>\s*</div>\s*</div>', '', pekka_section, flags=re.DOTALL)

# 3. ADD TO troops.html
with open('troops.html', 'r', encoding='utf-8') as f:
    troops_html = f.read()

# Inject pekka section before the swiper showcase section
if pekka_match and "<!-- ========== TROOP SHOWCASE ========== -->" not in troops_html:
    troops_html = troops_html.replace('<!-- ========== SHOWCASE / TROOP CARDS ========== -->', 
                                      pekka_section + '\n\n  <!-- ========== SHOWCASE / TROOP CARDS ========== -->')
    with open('troops.html', 'w', encoding='utf-8') as f:
        f.write(troops_html)

# 4. FIX SQUISHED CIRCLES IN styles.css
with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

if 'flex-shrink: 0;' not in css:
    css = css.replace(
        '.carousel-icon {\n    width: 80px;\n    height: 80px;',
        '.carousel-icon {\n    width: 80px;\n    height: 80px;\n    min-width: 80px;\n    flex-shrink: 0;'
    )
    # Also adjust the image fit just in case
    css = css.replace(
        '.carousel-icon img {\n    width: 90%;\n    object-fit: contain;\n  }',
        '.carousel-icon img {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n    transform: scale(0.85);\n  }'
    )
    with open('styles.css', 'w', encoding='utf-8') as f:
        f.write(css)

print("Done")
