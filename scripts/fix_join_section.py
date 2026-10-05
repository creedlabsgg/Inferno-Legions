import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

new_find_clan = '''  <!-- ========== JOIN INFERNO LEGIONS ========== -->
  <section class="find-clan-section py-20" style="background: url('assets/vibrant_village_bg.jpg') no-repeat center/cover; position:relative; border-bottom: 2px solid #333;">
    <div class="overlay" style="position:absolute; top:0;left:0;right:0;bottom:0; background:linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.95));"></div>
    <div class="container relative z-10 flex flex-col items-center justify-center">
      
      <div class="clan-glass-card" style="background: rgba(15, 15, 20, 0.75); backdrop-filter: blur(25px); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 40px; padding: 50px 40px; max-width: 800px; width: 100%; text-align: center; box-shadow: 0 30px 60px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1);">
        <h2 class="section-title text-5xl text-white mb-6 drop-shadow-lg" style="font-family: 'Luckiest Guy', cursive;">Forged In Fire</h2>
        
        <!-- Clean, symmetrical asset display -->
        <div class="clan-assets" style="position:relative; display:flex; justify-content:center; align-items:center; gap:30px; margin-bottom:40px;">
          <img src="assets/troops/badge.png" style="width:140px; filter:drop-shadow(0 20px 20px rgba(0,0,0,0.8)); transform:scale(1.1); z-index:2;">
        </div>
        
        <p class="text-gray-300 text-lg max-w-xl mx-auto mb-10 leading-relaxed font-bold" style="font-family: 'Nunito', sans-serif;">We are a competitive, high-level war clan. We require active participation in Clan Wars, CWL, and Clan Games. Do you have what it takes to join our ranks?</p>
        
        <div style="display:flex; gap:20px; justify-content:center; flex-wrap:wrap;">
          <a href="apply.html" class="coc-btn coc-btn--orange" style="text-decoration:none;">Apply Now</a>
          <a href="rules.html" class="coc-btn coc-btn--blue" style="text-decoration:none; padding:1.2rem 2rem;">Read Rules</a>
        </div>
      </div>

    </div>
  </section>'''

# Replace the old section
html = re.sub(r'<!-- ========== FIND YOUR CLAN ========== -->.*?<!-- ========== FOOTER ========== -->', new_find_clan + '\n\n  <!-- ========== FOOTER ========== -->', html, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
