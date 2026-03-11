/* =========================================================
   PTE World 2026 – Hotspot Script (이미지 뷰어 버전)
   ========================================================= */

const hotspots = [
  { id: 'avdgs',      label: 'A-VDGS',                                       image: 'images/avdgs.jpeg',      x: 52.0, y: 54.0, w: 20, h: 9.5 },
  { id: 'airlym',     label: 'AIRLYM™',                                      image: 'images/airlym.jpeg',     x: 73.4, y: 54.1, w: 20, h: 9.5 },
  { id: 'acgps',      label: 'AC-GPS',                                       image: 'images/acgps.jpeg',      x: 52.2, y: 64.6, w: 20, h: 9.5 },
  { id: 'aerodrome',  label: 'Aerodrome Obstacle Control System',            image: 'images/aerodrome.jpeg',  x: 73.2, y: 64.3, w: 20, h: 9.5 },
  { id: 'apron',      label: 'Airport Smart Apron Control Platform Solution',image: 'images/apron.jpeg',      x: 51.8, y: 74.5, w: 20, h: 9.5 },
  { id: 'adma',       label: 'A-DMA',                                        image: 'images/adma.jpeg',       x: 73.1, y: 74.4, w: 20, h: 9.5 },
  { id: 'selfcheckin',label: 'Self Check-in Robot',                          image: 'images/selfcheckin.jpeg',x: 51.8, y: 84.6, w: 20, h: 9.5 },
  { id: 'lguhd',      label: 'LG UHD Signage',                               image: 'images/lguhd.jpeg',      x: 72.9, y: 84.8, w: 20, h: 9.5 }
];

let activeId = null;

const imageWrapper   = document.getElementById('imageWrapper');
const productViewer  = document.getElementById('productViewer');
const productImg     = document.getElementById('productImg');
const pdfPlaceholder = document.getElementById('pdfPlaceholder');
const pdfNav         = document.getElementById('pdfNav');
const activeLabel    = document.getElementById('activeLabel');
const btnClose       = document.getElementById('btnClose');
const legendEl       = document.getElementById('legend');

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

    el.addEventListener('click', () => activateHotspot(hs));
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activateHotspot(hs); }
    });
    imageWrapper.appendChild(el);
  });
}

function buildLegend() {
  hotspots.forEach(hs => {
    const item = document.createElement('div');
    item.className = 'legend-item';
    item.id = `leg-${hs.id}`;
    item.innerHTML = `<span class="legend-dot"></span>${hs.label}`;
    item.addEventListener('click', () => activateHotspot(hs));
    legendEl.appendChild(item);
  });
}

function activateHotspot(hs) {
  if (activeId) {
    document.getElementById(`hs-${activeId}`)?.classList.remove('active');
    document.getElementById(`leg-${activeId}`)?.classList.remove('active');
  }
  if (activeId === hs.id) { activeId = null; closeViewer(); return; }

  activeId = hs.id;
  document.getElementById(`hs-${hs.id}`)?.classList.add('active');
  document.getElementById(`leg-${hs.id}`)?.classList.add('active');
  openViewer(hs);
}

function openViewer(hs) {
  pdfPlaceholder.style.display = 'none';
  productViewer.style.display  = 'block';
  pdfNav.style.display         = 'flex';
  productImg.src = hs.image;
  activeLabel.textContent = hs.label;
  if (window.innerWidth <= 900) {
    document.getElementById('pdf-panel').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function closeViewer() {
  productViewer.style.display  = 'none';
  pdfNav.style.display         = 'none';
  pdfPlaceholder.style.display = 'flex';
  productImg.src = '';
}

btnClose.addEventListener('click', () => {
  if (activeId) {
    document.getElementById(`hs-${activeId}`)?.classList.remove('active');
    document.getElementById(`leg-${activeId}`)?.classList.remove('active');
    activeId = null;
  }
  closeViewer();
});

buildHotspots();
buildLegend();
