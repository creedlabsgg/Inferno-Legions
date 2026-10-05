import re
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

stats_banner = '''  <!-- ========== LIVE CLAN STATS ========== -->
  <section class="api-stats-section py-8" style="background: #050505; border-bottom: 2px solid #333;">
    <div class="container flex justify-center flex-wrap gap-8">
      <div class="stat-box text-center" style="background: rgba(255,255,255,0.05); padding: 20px 40px; border-radius: 20px;">
        <div class="text-gray-400 font-bold" style="font-family: 'Luckiest Guy', cursive; letter-spacing:1px;">CLAN LEVEL</div>
        <div id="api-clan-level" class="text-4xl text-white font-bold" style="color: #ff9800; font-family: 'Luckiest Guy', cursive;">...</div>
      </div>
      <div class="stat-box text-center" style="background: rgba(255,255,255,0.05); padding: 20px 40px; border-radius: 20px;">
        <div class="text-gray-400 font-bold" style="font-family: 'Luckiest Guy', cursive; letter-spacing:1px;">WAR WINS</div>
        <div id="api-war-wins" class="text-4xl text-white font-bold" style="color: #4caf50; font-family: 'Luckiest Guy', cursive;">...</div>
      </div>
      <div class="stat-box text-center" style="background: rgba(255,255,255,0.05); padding: 20px 40px; border-radius: 20px;">
        <div class="text-gray-400 font-bold" style="font-family: 'Luckiest Guy', cursive; letter-spacing:1px;">MEMBERS</div>
        <div id="api-members-count" class="text-4xl text-white font-bold" style="color: #2196f3; font-family: 'Luckiest Guy', cursive;">...</div>
      </div>
      <div class="stat-box text-center" style="background: rgba(255,255,255,0.05); padding: 20px 40px; border-radius: 20px;">
        <div class="text-gray-400 font-bold" style="font-family: 'Luckiest Guy', cursive; letter-spacing:1px;">TROPHIES</div>
        <div id="api-clan-points" class="text-4xl text-white font-bold" style="color: #e91e63; font-family: 'Luckiest Guy', cursive;">...</div>
      </div>
    </div>
  </section>'''

# Inject banner after Cinematic Header
html = re.sub(r'(</section>\s*<!-- ========== BUILD. BATTLE. CONQUER. ========== -->)', stats_banner + '\n\n\\1', html)

# Link api.js before closing body
html = html.replace('</body>', '  <script src="api.js"></script>\n</body>')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
