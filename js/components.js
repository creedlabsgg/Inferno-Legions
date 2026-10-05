// components.js

function loadNavbar() {
  const navbarHTML = `
  <nav class="navbar" id="navbar">
    <div class="nav-container">
      <a href="/" class="nav-brand">
        <img referrerpolicy="no-referrer" src="assets/troops/badge.png" alt="Clan Badge" class="nav-badge api-clan-badge">
        <span class="nav-clan-name">INFERNO <span style="color: #ffeb3b; text-shadow: var(--stroke-black);">LEGIONS</span></span>
      </a>
      <ul class="nav-links">
        <li><a href="/" class="nav-link">Home</a></li>
        <li><a href="clan.html" class="nav-link">CLAN</a></li>
        <li><a href="wars.html" class="nav-link">Wars</a></li>
        <li><a href="troops.html" class="nav-link">Troops</a></li>
        <li><a href="hall-of-fame.html" class="nav-link">Hall of Fame</a></li>
        <li><a href="layouts.html" class="nav-link">Layouts</a></li>
        <li><a href="rules.html" class="nav-link">Rules</a></li>
        <li><a href="events.html" class="nav-link">Events</a></li>
      </ul>
      <div class="nav-actions">
        <a href="https://link.clashofclans.com/en?action=OpenClanProfile&tag=2C9RRQVJR" target="_blank" class="coc-btn coc-btn--blue btn-small">
          Discord
        </a>
      </div>
      <button class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div class="mobile-nav" id="mobile-nav">
      <a href="/" class="nav-link">Home</a>
      <a href="clan.html" class="nav-link">CLAN</a>
      <a href="wars.html" class="nav-link">Wars</a>
      <a href="troops.html" class="nav-link">Troops</a>
      <a href="hall-of-fame.html" class="nav-link">Hall of Fame</a>
      <a href="layouts.html" class="nav-link">Layouts</a>
      <a href="rules.html" class="nav-link">Rules</a>
      <a href="events.html" class="nav-link">Events</a>
      <a href="#" class="coc-btn coc-btn--blue btn-small" style="margin-top:1rem">Discord</a>
    </div>
  </nav>`;
  
  const placeholder = document.getElementById('navbar-placeholder');
  if (placeholder) {
    placeholder.innerHTML = navbarHTML;
  }
}

function loadFooter() {
  const footerHTML = `
  <style>
    .footer-logo-container { position: relative; cursor: pointer; display: inline-flex; align-items: center; gap: 1rem; z-index: 50; }
    
    .creed-link-col ul li a { display: flex; align-items: center; gap: 0.5rem; color: #a1a1aa; transition: all 0.3s ease; }
    .creed-link-col ul li a:hover { color: #ff9800; transform: translateX(5px); }
    .creed-link-col ul { display: flex; flex-direction: column; gap: 0.8rem; }
    
    .creed-link-col ul li a .link-icon {
      width: 0;
      opacity: 0;
      margin-left: -12px;
      transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    
    .creed-link-col ul li a:hover .link-icon,
    .creed-link-col:hover ul li a .link-icon,
    .hover-all-icons .creed-link-col ul li a .link-icon {
      width: 16px;
      opacity: 1;
      margin-left: 0;
    }
    
    @media (min-width: 1024px) {
      .footer-left-col { grid-column: span 4 / span 4 !important; }
      .footer-right-col { grid-column: span 8 / span 8 !important; }
    }
  </style>
  <section class="creed-footer-section font-outfit" id="custom-inferno-footer" style="position: relative; margin-top: -50px; z-index: 50; background: #0a0a0c; border-radius: 4rem 4rem 0 0; border-top: 1px solid rgba(255,255,255,0.05);">
    <!-- Main rounded footer -->
    <footer class="creed-footer-container" style="position: relative; z-index: 10; padding-top: 3rem; overflow: visible;">
      <div class="creed-footer-gradient-bg inferno-bg-glow" style="border-radius: 4rem 4rem 0 0;"></div>
      
      <div class="creed-footer-grid" style="align-items: stretch; display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); gap: 3rem; margin-bottom: 2rem;">
        
        <!-- Left Section (Logo & Subscribe) -->
        <div style="display: flex; flex-direction: column; justify-content: space-between; gap: 2rem;" class="footer-left-col">
          
          <div class="footer-logo-container" 
               onmouseenter="document.getElementById('custom-inferno-footer').classList.add('hover-all-icons')" 
               onmouseleave="document.getElementById('custom-inferno-footer').classList.remove('hover-all-icons')">
            <img src="assets/troops/badge.png" class="api-clan-badge" style="width: 70px; filter: drop-shadow(0 10px 10px rgba(0,0,0,0.5));" alt="Logo">
            <div style="display: flex; flex-direction: column; align-items: center; line-height: 0.9;">
              <span class="nav-clan-name" style="font-size: 2.2rem; margin-bottom: 0px;">INFERNO</span>
              <span style="color: #ffeb3b; text-shadow: var(--stroke-black); font-size: 2.2rem; font-family: var(--font-coc);">LEGIONS</span>
            </div>
          </div>

          <!-- Clan Description -->
          <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: -1rem;">
            <p style="color: #a1a1aa; font-size: 0.95rem; font-family: 'Nunito', sans-serif; line-height: 1.6; max-width: 90%;">
              The ultimate war clan and community for elite Clashers. Build, scale, and manage your village seamlessly.
            </p>
          </div>
        </div>

        <!-- Right Section (Links Grid) -->
        <div style="display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 1.5rem;" class="footer-right-col footer-links-multi-grid">
            
            <div class="creed-link-col group-col">
              <p style="font-family: 'Nunito', sans-serif; font-size: 0.85rem; color: #d4d4d8; text-transform: uppercase; letter-spacing: 2px; font-weight: 900; margin-bottom: 1rem;">The Clan</p>
              <ul>
                <li><a href="roster.html"><svg class="link-icon inferno-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg><span>Roster</span></a></li>
                <li><a href="troops.html"><svg class="link-icon inferno-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg><span>Troops</span></a></li>
                <li><a href="rules.html"><svg class="link-icon inferno-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg><span>Rules</span></a></li>
              </ul>
            </div>
            
            <div class="creed-link-col group-col">
              <p style="font-family: 'Nunito', sans-serif; font-size: 0.85rem; color: #d4d4d8; text-transform: uppercase; letter-spacing: 2px; font-weight: 900; margin-bottom: 1rem;">War Center</p>
              <ul>
                <li><a href="wars.html"><svg class="link-icon inferno-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg><span>War Log</span></a></li>
                <li><a href="strategies.html"><svg class="link-icon inferno-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon><line x1="9" y1="3" x2="9" y2="18"></line><line x1="15" y1="6" x2="15" y2="21"></line></svg><span>Strategies</span></a></li>
                <li><a href="cwl.html"><svg class="link-icon inferno-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><span>CWL</span></a></li>
              </ul>
            </div>
            
            <div class="creed-link-col group-col">
              <p style="font-family: 'Nunito', sans-serif; font-size: 0.85rem; color: #d4d4d8; text-transform: uppercase; letter-spacing: 2px; font-weight: 900; margin-bottom: 1rem;">Community</p>
              <ul>
                <li><a href="https://discord.gg/" target="_blank"><svg class="link-icon inferno-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg><span>Discord</span></a></li>
                <li><a href="events.html"><svg class="link-icon inferno-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg><span>Events</span></a></li>
                <li><a href="media.html"><svg class="link-icon inferno-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg><span>Media</span></a></li>
              </ul>
            </div>
            
            <div class="creed-link-col group-col">
              <p style="font-family: 'Nunito', sans-serif; font-size: 0.85rem; color: #d4d4d8; text-transform: uppercase; letter-spacing: 2px; font-weight: 900; margin-bottom: 1rem;">Resources</p>
              <ul>
                <li><a href="https://clashofstats.com" target="_blank"><svg class="link-icon inferno-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg><span>Stats</span></a></li>
                <li><a href="https://supercell.com" target="_blank"><svg class="link-icon inferno-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg><span>Supercell</span></a></li>
                <li><a href="layouts.html"><svg class="link-icon inferno-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg><span>Layouts</span></a></li>
              </ul>
            </div>

            <div class="creed-link-col group-col">
              <p style="font-family: 'Nunito', sans-serif; font-size: 0.85rem; color: #d4d4d8; text-transform: uppercase; letter-spacing: 2px; font-weight: 900; margin-bottom: 1rem;">Support</p>
              <ul>
                <li><a href="faq.html"><svg class="link-icon inferno-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg><span>FAQ</span></a></li>
                <li><a href="contact.html"><svg class="link-icon inferno-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg><span>Contact</span></a></li>
                <li><a href="apply.html"><svg class="link-icon inferno-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg><span>Apply</span></a></li>
              </ul>
            </div>
        </div>

      </div>
      
      <!-- Bottom Bar -->
      <div class="creed-bottom-bar" style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 1.5rem; padding-bottom: 1.5rem; gap: 1rem; width: 100%;">
        <p style="flex-shrink: 0; margin-right: 1rem; font-size: 0.875rem; color: #a1a1aa;">&copy; 2026 CreeD Interactive. All rights reserved.</p>
        <div class="creed-credits" style="display: flex; align-items: center; justify-content: flex-end; gap: 0.5rem; color: #a1a1aa; font-size: 0.875rem; font-family: 'Nunito', sans-serif; font-weight: 500; tracking: wide;">
          <span style="font-style: italic;">Forged in Fire</span>
          <svg style="transform: translateY(-1px);" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#ff9800" stroke="#ff9800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flame"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
          <span style="display: flex; align-items: center; gap: 0.4rem; font-style: italic; white-space: nowrap;">
            crafted by 
            <span class="pixel-text glitch-effect" data-text="YUVRAJ.GG" style="color: white; font-style: italic; letter-spacing: 1px;">YUVRAJ.GG</span>
          </span>
        </div>
      </div>
    </footer>
  </section>
  `;

  const placeholder = document.getElementById('footer-placeholder');
  if (placeholder) {
    placeholder.innerHTML = footerHTML;
  }
}

function initNavigation() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const navbar = document.getElementById('navbar');

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
      const isActive = mobileNav.style.display === 'flex';
      mobileNav.style.display = isActive ? 'none' : 'flex';
      mobileNav.style.flexDirection = 'column';
      mobileNav.style.gap = '2rem';
      mobileNav.style.background = 'rgba(0,0,0,0.95)';
      mobileNav.style.position = 'fixed';
      mobileNav.style.top = '0';
      mobileNav.style.left = '0';
      mobileNav.style.width = '100%';
      mobileNav.style.height = '100vh';
      mobileNav.style.zIndex = '999';
      mobileNav.style.justifyContent = 'center';
      mobileNav.style.alignItems = 'center';
    });

    document.querySelectorAll('.mobile-nav .nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.style.display = 'none';
      });
    });
  }

  if (navbar) {
    const isHomepage = document.querySelector('.cinematic-header') !== null;
    
    // Initial check
    if (!isHomepage || window.scrollY > 50) {
      navbar.classList.add('scrolled');
    }

    window.addEventListener('scroll', () => {
      if (!isHomepage || window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    const currentPath = window.location.pathname.split('/').pop() || '';
    document.querySelectorAll('.nav-link').forEach(link => {
      const linkPath = link.getAttribute('href').split('/').pop() || '';
      if (linkPath === currentPath) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
}

// Load components immediately
loadNavbar();
loadFooter();
initNavigation();

