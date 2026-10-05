// app.js

// app.js

// ==========================================
// ⚠️ LIVE CLASH OF CLANS API INTEGRATION ⚠️
// ==========================================
// API logic is now handled entirely by api.js


let rosterDataCache = [];
let activeRoleFilter = 'all';
let activeSortType = 'trophies';
let currentSearchQuery = '';

function renderMembers(data) {
  if (data) rosterDataCache = data;
  
  const membersGrid = document.getElementById('members-grid');
  if (!membersGrid) return;
  membersGrid.innerHTML = '';
  
  // Filter
  let filtered = rosterDataCache.filter(member => {
    if (activeRoleFilter !== 'all') {
      if (activeRoleFilter === 'leader' && member.role !== 'leader') return false;
      if (activeRoleFilter === 'coLeader' && member.role !== 'coLeader') return false;
      if (activeRoleFilter === 'admin' && member.role !== 'admin') return false;
      if (activeRoleFilter === 'member' && member.role !== 'member') return false;
    }
    if (currentSearchQuery) {
      if (!member.name.toLowerCase().includes(currentSearchQuery.toLowerCase())) return false;
    }
    return true;
  });

  // Sort
  filtered.sort((a, b) => {
    if (activeSortType === 'trophies') return b.trophies - a.trophies;
    if (activeSortType === 'thLevel') return b.th - a.th;
    return 0;
  });

  filtered.forEach((member, index) => {
    const card = document.createElement('div');
    const cardClass = member.role === 'coLeader' ? 'card-coleader' : 
                      member.role === 'admin' ? 'card-elder' : 
                      member.role === 'leader' ? 'card-leader' : 'card-member';
    
    card.className = `player-card ${cardClass}`;
    card.style.animation = `float ${3 + (index % 3)}s ease-in-out infinite alternate`;
    card.style.animationDelay = `${index * 0.1}s`;
    
    const roleText = member.role === 'coLeader' ? 'Co-Leader' : 
                     member.role === 'admin' ? 'Elder' : 
                     member.role === 'leader' ? 'Leader' : 'Member';

    const thImageSrc = `assets/townhalls/${member.th}.png`;
    
    // Parse Heroes
    let heroesHtml = '';
    if (member.heroes && member.heroes.length > 0) {
      const topHeroes = member.heroes.filter(h => h.village === 'home').slice(0, 3);
      if (topHeroes.length > 0) {
          heroesHtml = `<div class="heroes-container" style="display: flex; gap: 0.5rem; margin-top: 0.5rem;">`;
          topHeroes.forEach(h => {
              heroesHtml += `<span style="font-size: 0.8rem; background: rgba(0,0,0,0.5); padding: 2px 6px; border-radius: 4px; color: #ff9800; border: 1px solid #ff9800;">${h.name.split(' ')[0]} Lvl ${h.level}</span>`;
          });
          heroesHtml += `</div>`;
      }
    }

    card.innerHTML = `
      <div class="player-card-header">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <span class="player-name">${member.name}</span>
          <span class="xp-badge">${member.expLevel}</span>
        </div>
        <span class="player-role-badge role-${member.role}">${roleText}</span>
      </div>
      <div class="player-stats">
        <div class="stat-item th-container">
          <div class="th-image-wrapper">
             <img src="${thImageSrc}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" alt="TH${member.th}">
             <div class="th-fallback" style="display:none;">${member.th}<span>TH</span></div>
          </div>
          <span style="color: var(--btn-gold-bottom)">Town Hall ${member.th}</span>
        </div>
        ${heroesHtml}
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1rem;">
          <div class="stat-item" style="margin-top: 0;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffeb3b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              <span>${member.trophies.toLocaleString()}</span>
          </div>
          <div class="stat-item" style="margin-top: 0;">
              <span style="color: #03a9f4; font-weight: bold; font-size: 1rem;">BB:</span>
              <span style="color: #03a9f4">${member.builderBaseTrophies ? member.builderBaseTrophies.toLocaleString() : 0}</span>
          </div>
          <div class="stat-item" style="margin-top: 0; grid-column: span 2;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4caf50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              <span style="color: #4caf50">${member.donations.toLocaleString()} Donations</span>
          </div>
        </div>
        <div class="playtime-tracker" style="margin-top: 1rem; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 0.5rem;">
          <svg class="playtime-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          Active: Just now
        </div>
      </div>
    `;
    membersGrid.appendChild(card);
  });
}

// Event listeners for filters, search, and sort
document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const sortSelect = document.getElementById('sort-select');
  const searchInput = document.getElementById('search-input');

  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        filterBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        activeRoleFilter = e.target.getAttribute('data-role');
        renderMembers(); // Re-render with active filters
      });
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      activeSortType = e.target.value;
      renderMembers();
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      renderMembers();
    });
  }
});

// Render Mock War Log
const warLogData = [
  { result: 'win', opponent: 'Shadow Assassins', score: '142 - 138', date: '2 days ago' },
  { result: 'win', opponent: 'Elite Warriors', score: '150 - 149', date: '4 days ago' },
  { result: 'loss', opponent: 'Titan Lords', score: '120 - 145', date: '1 week ago' },
  { result: 'win', opponent: 'Dragon Riders', score: '148 - 110', date: '1.5 weeks ago' },
  { result: 'win', opponent: 'Savage Clan', score: '135 - 130', date: '2 weeks ago' },
];

const warLogContainer = document.getElementById('war-log-entries');

function renderWarLog() {
  if (!warLogContainer) return; // Only run on wars.html
  warLogContainer.innerHTML = '';
  warLogData.forEach(entry => {
    const el = document.createElement('div');
    el.className = 'war-log-entry';
    
    const resultChar = entry.result === 'win' ? 'W' : 'L';
    const resultClass = entry.result === 'win' ? 'result-win' : 'result-loss';

    el.innerHTML = `
      <div class="entry-result ${resultClass}">${resultChar}</div>
      <div style="flex-grow: 1;">
        <div style="font-size: 1.1rem; color: var(--text-dark);">${entry.opponent}</div>
        <div style="font-size: 0.8rem; color: #78909c;">${entry.date}</div>
      </div>
      <div style="font-family: var(--font-coc); font-size: 1.2rem; letter-spacing: 1px;">
        ${entry.score}
      </div>
    `;
    warLogContainer.appendChild(el);
  });
}

if (warLogContainer) {
  renderWarLog();
}

// Simple Number Counter Animation for Hero Stats
const statValues = document.querySelectorAll('.hero-stat-value');
if (statValues.length > 0) {
  statValues.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-target'));
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / target));
    
    let current = 0;
    const increment = target > 1000 ? Math.ceil(target / 50) : 1;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      stat.textContent = current.toLocaleString();
    }, stepTime);
  });
}

// ========== DYNAMIC TROOP SHOWCASE ==========
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("showcase-carousel");
  const mainImg = document.getElementById("showcase-main-img");
  const bgText = document.getElementById("showcase-bg-text");
  const dpsText = document.getElementById("showcase-dps-text");
  const hpText = document.getElementById("showcase-hp-text");
  const elixirText = document.getElementById("showcase-elixir-text");

  if (carousel && window.cocTroops && window.cocTroops.length > 0) {
    // Generate carousel icons
    window.cocTroops.forEach((troop, index) => {
      const icon = document.createElement("div");
      icon.className = `carousel-icon ${index === 0 ? 'active' : ''}`;
      icon.innerHTML = `<img referrerpolicy="no-referrer" src="${troop.image}" alt="${troop.name}">`;
      
      icon.addEventListener("click", () => {
        // Update active class
        document.querySelectorAll(".carousel-icon").forEach(el => el.classList.remove("active"));
        icon.classList.add("active");

        // Update main showcase with transition
        mainImg.style.opacity = "0";
        setTimeout(() => {
          mainImg.src = troop.image;
          bgText.textContent = troop.name.toUpperCase();
          dpsText.textContent = "DPS: " + troop.dps;
          hpText.textContent = "HP: " + troop.health;
          elixirText.textContent = troop.type.toUpperCase() + ": " + troop.elixir;
          mainImg.style.opacity = "1";
        }, 300);
      });
      
      carousel.appendChild(icon);
    });

    // Initialize with first troop
    const firstTroop = window.cocTroops[0];
    if (mainImg) mainImg.src = firstTroop.image;
    if (bgText) bgText.textContent = firstTroop.name.toUpperCase();
    if (dpsText) dpsText.textContent = "DPS: " + firstTroop.dps;
    if (hpText) hpText.textContent = "HP: " + firstTroop.health;
    if (elixirText) elixirText.textContent = firstTroop.type.toUpperCase() + ": " + firstTroop.elixir;
  }
});

// Custom Video Loop for cinematic header
const bgVideo = document.getElementById("bg-video");
if (bgVideo) {
  bgVideo.addEventListener("timeupdate", function() {
    if (this.currentTime >= 29) {
      this.currentTime = 16;
      this.play();
    }
  });
}

