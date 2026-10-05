const fs = require('fs');
const path = require('path');

const townHalls = {
  1: 'https://static.wikia.nocookie.net/clashofclans/images/c/c2/Town_Hall_1.png',
  2: 'https://static.wikia.nocookie.net/clashofclans/images/3/36/Town_Hall_2.png',
  3: 'https://static.wikia.nocookie.net/clashofclans/images/d/d7/Town_Hall_3.png',
  4: 'https://static.wikia.nocookie.net/clashofclans/images/5/5e/Town_Hall_4.png',
  5: 'https://static.wikia.nocookie.net/clashofclans/images/5/5a/Town_Hall_5.png',
  6: 'https://static.wikia.nocookie.net/clashofclans/images/6/67/Town_Hall_6.png',
  7: 'https://static.wikia.nocookie.net/clashofclans/images/3/3d/Town_Hall_7.png',
  8: 'https://static.wikia.nocookie.net/clashofclans/images/4/46/Town_Hall_8.png',
  9: 'https://static.wikia.nocookie.net/clashofclans/images/e/e2/Town_Hall_9.png',
  10: 'https://static.wikia.nocookie.net/clashofclans/images/9/90/Town_Hall_10.png',
  11: 'https://static.wikia.nocookie.net/clashofclans/images/d/d7/Town_Hall_11.png',
  12: 'https://static.wikia.nocookie.net/clashofclans/images/8/87/Town_Hall_12.png',
  13: 'https://static.wikia.nocookie.net/clashofclans/images/c/c5/Town_Hall_13.png',
  14: 'https://static.wikia.nocookie.net/clashofclans/images/5/5e/Town_Hall_14.png',
  15: 'https://static.wikia.nocookie.net/clashofclans/images/c/c0/Town_Hall_15.png',
  16: 'https://static.wikia.nocookie.net/clashofclans/images/d/d3/Town_Hall_16.png'
};

const troops = {
  'barbarian': 'https://static.wikia.nocookie.net/clashofclans/images/e/e0/Barbarian.png',
  'archer': 'https://static.wikia.nocookie.net/clashofclans/images/a/a4/Archer.png',
  'pekka': 'https://static.wikia.nocookie.net/clashofclans/images/0/07/PEKKA.png'
};

async function downloadImage(url, filepath) {
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
      }
    });
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const buffer = await res.arrayBuffer();
    fs.writeFileSync(filepath, Buffer.from(buffer));
    console.log(`Downloaded: ${filepath}`);
  } catch (e) {
    console.error(`Failed to download ${url}:`, e.message);
  }
}

async function main() {
  const thDir = path.join(__dirname, 'assets', 'townhalls');
  const troopsDir = path.join(__dirname, 'assets', 'troops');
  if (!fs.existsSync(thDir)) fs.mkdirSync(thDir, { recursive: true });
  if (!fs.existsSync(troopsDir)) fs.mkdirSync(troopsDir, { recursive: true });

  for (const [level, url] of Object.entries(townHalls)) {
    await downloadImage(url, path.join(thDir, `${level}.png`));
  }
  for (const [name, url] of Object.entries(troops)) {
    await downloadImage(url, path.join(troopsDir, `${name}.png`));
  }
}

main();
