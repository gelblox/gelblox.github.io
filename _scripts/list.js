// list.js - Store at gelblox.github.io/_scripts/list.js
const executorList = [
  {
    name: "Solara",
    platform: "windows",
    unc: 70,
    level: "N/A",
    price: "FREE",
    rating: 4.6,
    website: "https://solara.dev",
    decompiler: true,
    free: true,
    keyless: true,
    features: [
      "Safe",
      "Popular choice"
    ]
  },
  {
    name: "Wave",
    platform: "windows", 
    unc: 90,
    level: "N/A",
    price: "$7.49/weekly",
    rating: 5.0,
    website: "https://getwave.dev",
    purchaseUrl: "https://bloxproducts.com/#f0",
    decompiler: true,
    free: false,
    keyless: true,
    features: [
      "Premium features",
      "High stability"
    ]
  },
  {
    name: "Xeno",
    platform: "windows",
    unc: 77,
    level: "N/A", 
    price: "FREE",
    rating: 4.8,
    website: "https://discord.gg/getxeno",
    donateUrl: "https://gelblox.github.io/donate/user/rizve",
    decompiler: false,
    free: true,
    keyless: false,
    features: [
      "Community driven",
      "Regular updates"
    ]
  },
  {
    name: "Delta",
    platform: ["apple", "android"],
    unc: 100,
    level: "N/A",
    price: "Key-System",
    rating: 5.0,
    website: "https://deltaexploits.gg",
    decompiler: true,
    free: true,
    keyless: false,
    features: [
      "Mobile support",
      "Cross-platform"
    ]
  },
  {
    name: "Synapse Z",
    platform: "windows",
    unc: 95,
    level: "N/A",
    price: "$6.49/weekly",
    rating: 4.5,
    website: "https://synapsez.net",
    purchaseUrl: "https://bloxproducts.com/#f1",
    decompiler: true,
    free: false,
    keyless: true,
    features: [
      "Premium support",
      "Advanced features"
    ]
  }
];

// Function to create executor cards
function createExecutorCards() {
  const container = document.querySelector('.executor-grid');
  const rowSize = 3;
  let currentRow;

  executorList.forEach((executor, index) => {
    if (index % rowSize === 0) {
      currentRow = document.createElement('div');
      currentRow.className = 'executor-row';
      container.appendChild(currentRow);
    }

    const card = createExecutorCard(executor);
    currentRow.appendChild(card);
  });

  // Fill empty slots in last row
  const lastRow = container.lastElementChild;
  const emptySlots = rowSize - lastRow.children.length;
  for (let i = 0; i < emptySlots; i++) {
    const emptyCard = document.createElement('div');
    emptyCard.className = 'executor-card empty';
    lastRow.appendChild(emptyCard);
  }
}

function createExecutorCard(executor) {
  const card = document.createElement('div');
  card.className = 'executor-card';
  
  card.innerHTML = `
    <div class="card-header">
      <h3 class="executor-name">${executor.name}</h3>
      ${getPlatformIcons(executor.platform)}
    </div>
    <div class="executor-meta">
      <div class="meta-item">
        <i class="fas fa-wrench"></i>
        <span>UNC: ${executor.unc}%</span>
      </div>
      <div class="meta-item">
        <i class="fas fa-ranking-star"></i>
        <span>Level: ${executor.level}</span>
      </div>
      <div class="meta-item">
        <i class="fas fa-tag"></i>
        <span>${executor.price}</span>
      </div>
      ${getFeatureBadges(executor)}
    </div>
    <div class="executor-rating">
      <span>${executor.rating}/5</span>
      <div class="rating-stars">
        ${getRatingStars(executor.rating)}
      </div>
    </div>
    <div class="executor-actions">
      <a href="${executor.website}" class="button" target="_blank" rel="noopener noreferrer">
        <i class="fas fa-globe"></i>
        Website
      </a>
      ${getSecondaryButton(executor)}
    </div>
  `;
  
  return card;
}

// Helper functions
function getPlatformIcons(platform) {
  if (Array.isArray(platform)) {
    return `<div class="new-device-ico">${platform.map(p => 
      `<i class="fab fa-${p}"></i>`).join('')}</div>`;
  }
  return `<i class="fab fa-${platform} device-ico"></i>`;
}

function getFeatureBadges(executor) {
  let badges = '';
  if (executor.decompiler) badges += '<span class="feature-badge">Decompiler</span>';
  if (executor.free) badges += '<span class="feature-badge">Free</span>';
  if (executor.keyless) badges += '<span class="feature-badge">Keyless</span>';
  
  return executor.features.map(feature => 
    `<span class="feature-badge">${feature}</span>`).join('') + badges;
}

function getRatingStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
  return Array(5).fill().map((_, i) => {
    if (i < fullStars) return '<i class="fas fa-star"></i>';
    if (i === fullStars && hasHalfStar) return '<i class="fas fa-star-half-alt"></i>';
    return '<i class="far fa-star"></i>';
  }).join('');
}

function getSecondaryButton(executor) {
  if (executor.purchaseUrl) {
    return `<button class="button secondary" onclick="window.open('${executor.purchaseUrl}', '_blank')">
      <i class="fas fa-shopping-cart"></i>
      Purchase
    </button>`;
  }
  if (executor.donateUrl) {
    return `<button class="button secondary" onclick="window.open('${executor.donateUrl}', '_blank')">
      <i class="fas fa-heart"></i>
      Donate
    </button>`;
  }
  return '';
}

// Additional CSS to support the new features
const additionalStyles = `
.executor-row {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
}

.executor-card.empty {
  visibility: hidden;
}

.feature-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  margin: 0.25rem;
  border-radius: 1rem;
  background: var(--gradient);
  color: var(--text);
  font-size: 0.875rem;
  font-weight: 500;
}

.executor-meta {
  flex-wrap: wrap;
};