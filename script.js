const hotspots = [
  { id: 'avdgs',      label: 'A-VDGS',                                        image: 'images/avdgs.jpeg',      x: 52.0, y: 54.0, w: 20, h: 9.5 },
  { id: 'airlym',     label: 'AIRLYM™',                                       image: 'images/airlym.jpeg',     x: 73.4, y: 54.1, w: 20, h: 9.5 },
  { id: 'acgps',      label: 'AC-GPS',                                        image: 'images/acgps.jpeg',      x: 52.2, y: 64.6, w: 20, h: 9.5 },
  { id: 'aerodrome',  label: 'Aerodrome Obstacle Control System',             image: 'images/aerodrome.jpeg',  x: 73.2, y: 64.3, w: 20, h: 9.5 },
  { id: 'apron',      label: 'Airport Smart Apron Control Platform Solution', image: 'images/apron.jpeg',      x: 51.8, y: 74.5, w: 20, h: 9.5 },
  { id: 'adma',       label: 'A-DMA',                                         image: 'images/adma.jpeg',       x: 73.1, y: 74.4, w: 20, h: 9.5 },
  { id: 'selfcheckin',label: 'Self Check-in Robot',                           image: 'images/selfcheckin.jpeg',x: 51.8, y: 84.6, w: 20, h: 9.5 },
  { id: 'lguhd',      label: 'LG UHD Signage',                                image: 'images/lguhd.jpeg',      x: 72.9, y: 84.8, w: 20, h: 9.5 }
];

const imageWrapper  = document.getElementById('imageWrapper');
const legendEl      = document.getElementById('legend');
const popupOverlay  = document.getElementById('popupOverlay');
const popupImg      = document.getElementById('popupImg');
const popupClose    = document.getElementById('popupClose');

function buildHotspots() {
  hotspots.forEach(hs => {
    const el = document.createElement('div');
    el.className = 'hotspot';
    el.id = `hs-${hs.id}`;
    el.setAttribute('role', 'button');
    el.setAttribute('tabindex', '0');
    el.setAttribute('aria-label', hs.label);
    el.style.left   = `${hs.x}%`;
    el.style.top    = `${hs.y}%`;
    el.style.width  = `${hs.w}%`;
    el.style.height = `${hs.h}%`;

    const tooltip = document.createElement('span');
    tooltip.className = 'hotspot-label';
    tooltip.textContent = hs.label;
    el.appendChild(tooltip);

    el.addEventListener('click', () => openPopup(hs));
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openPopup(hs); }
    });
    imageWrapper.appendChild(el);
  });
}

function buildLegend() {
  hotspots.forEach(hs => {
    const item = document.createElement('div');
    item.className = 'legend-item';
    item.innerHTML = `<span class="legend-dot"></span>${hs.label}`;
    item.addEventListener('click', () => openPopup(hs));
    legendEl.appendChild(item);
  });
}

function openPopup(hs) {
  popupImg.src = hs.image;
  popupOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closePopup() {
  popupOverlay.classList.remove('active');
  document.body.style.overflow = '';
  popupImg.src = '';
}

// 닫기 버튼
popupClose.addEventListener('click', closePopup);

// 오버레이 바깥 클릭 시 닫기
popupOverlay.addEventListener('click', e => {
  if (e.target === popupOverlay) closePopup();
});

// ESC 키로 닫기
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closePopup();
});

buildHotspots();
buildLegend();
