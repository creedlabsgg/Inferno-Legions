// api.js

const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
const API_BASE_URL = isLocalhost ? 'http://localhost:3000/api' : '/api';

let membersData = [];

async function fetchClanStats() {
    try {
        const response = await fetch(`${API_BASE_URL}/clan`);
        if (!response.ok) throw new Error('Failed to fetch clan data');
        const data = await response.json();
        
        // Inject into DOM
        const levelEl = document.getElementById('api-clan-level');
        const warWinsEl = document.getElementById('api-war-wins');
        const membersEl = document.getElementById('api-members-count');
        const pointsEl = document.getElementById('api-clan-points');
        const capitalEl = document.getElementById('api-capital-level');
        const capitalLabelEl = document.getElementById('api-capital-label');
        const capitalImgEl = document.getElementById('api-capital-img');
        const badgeEls = document.querySelectorAll('.api-clan-badge');

        if (levelEl) levelEl.textContent = data.clanLevel;
        if (warWinsEl) warWinsEl.textContent = data.warWins;
        if (membersEl) membersEl.textContent = `${data.members}/50`;
        if (pointsEl) pointsEl.textContent = data.clanPoints.toLocaleString();
        
        if (capitalEl) capitalEl.textContent = data.capitalHallLevel || '10';
        if (capitalLabelEl) capitalLabelEl.textContent = `Capital Hall ${data.capitalHallLevel || '10'}`;
        if (capitalImgEl) {
            // Check if the image source actually needs updating to prevent infinite loading if it's already set
            const newSrc = `assets/townhalls/Capital_Hall_${data.capitalHallLevel || '10'}.png`;
            if (!capitalImgEl.src.endsWith(newSrc)) {
                capitalImgEl.src = newSrc;
            }
        }
        
        if (data.badgeUrl && badgeEls.length > 0) {
            badgeEls.forEach(img => {
                img.src = data.badgeUrl;
            });
        }

    } catch (error) {
        console.error('Error loading API clan stats:', error);
    }
}

async function fetchClanMembers() {
    const membersGrid = document.getElementById('members-grid');
    if (!membersGrid) return; // Only run on members.html
    
    try {
        const response = await fetch(`${API_BASE_URL}/members`);
        if (!response.ok) {
            throw new Error("Failed to fetch clan members from local API backend.");
        }

        const data = await response.json();
        
        // Map official API data to our format
        membersData = data.items.map(member => ({
            name: member.name,
            role: member.role,
            th: member.townHallLevel || 10,
            trophies: member.trophies,
            builderBaseTrophies: member.builderBaseTrophies || 0,
            donations: member.donations,
            expLevel: member.expLevel || 0,
            heroes: member.heroes || []
        }));

        // Sort by trophies descending
        membersData.sort((a, b) => b.trophies - a.trophies);
        
        if (typeof renderMembers === 'function') {
            renderMembers(membersData);
        }

    } catch (error) {
        console.error('Error loading API members, falling back to dummy data:', error);
        
        const dummyMembers = [
            { name: "Destroyer99", role: "leader", th: 15, trophies: 5120, donations: 12000, expLevel: 245 },
            { name: "xX_Sniper_Xx", role: "coLeader", th: 14, trophies: 4890, donations: 8000, expLevel: 210 },
            { name: "InfernoKing", role: "coLeader", th: 14, trophies: 4700, donations: 6500, expLevel: 200 },
            { name: "DragonSlayer", role: "admin", th: 13, trophies: 4500, donations: 4000, expLevel: 180 },
            { name: "LootGoblin", role: "admin", th: 12, trophies: 4200, donations: 3500, expLevel: 165 },
            { name: "ShadowWizard", role: "admin", th: 13, trophies: 4100, donations: 3000, expLevel: 170 },
            { name: "Rookie1", role: "member", th: 11, trophies: 3800, donations: 1500, expLevel: 140 },
            { name: "Rookie2", role: "member", th: 10, trophies: 3500, donations: 800, expLevel: 120 },
            { name: "PekkaMaster", role: "member", th: 12, trophies: 3900, donations: 2100, expLevel: 150 },
            { name: "ArcherQueen2", role: "member", th: 11, trophies: 3600, donations: 1100, expLevel: 135 }
        ];
        
        if (typeof renderMembers === 'function') {
            renderMembers(dummyMembers);
        } else {
            membersGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: white;">Error loading clan data: ${error.message}</div>`;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchClanStats();
    fetchClanMembers();
});
