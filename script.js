/* =========================================================
   PTE World 2026 – Hotspot Script
   클릭 시 detail/ 페이지로 이동
   ========================================================= */

const hotspots = [
  { id: 'avdgs',      label: 'A-VDGS',                                        url: 'detail/avdgs.html',      x: 52.0, y: 54.0, w: 20, h: 9.5 },
  { id: 'airlym',     label: 'AIRLYM™',                                       url: 'detail/airlym.html',     x: 73.4, y: 54.1, w: 20, h: 9.5 },
  { id: 'acgps',      label: 'AC-GPS',                                        url: 'detail/acgps.html',      x: 52.2, y: 64.6, w: 20, h: 9.5 },
  { id: 'aerodrome',  label: 'Aerodrome Obstacle Control System',             url: 'detail/aerodrome.html',  x: 73.2, y: 64.3, w: 20, h: 9.5 },
  { id: 'apron',      label: 'Airport Smart Apron Control Platform Solution', url: 'detail/apron.html',      x: 51.8, y: 74.5, w: 20, h: 9.5 },
  { id: 'adma',       label: 'A-DMA',                                         url: 'detail/adma.html',       x: 73.1, y: 74.4, w: 20, h: 9.5 },
  { id: 'selfcheckin',label: 'Self Check-in Robot',                           url: 'detail/selfcheckin.html',x: 51.8, y: 84.6, w: 20, h: 9.5 },
  { id: 'lguhd',      label: 'LG UHD Signage',                                url: 'detail/lguhd.html',      x: 72.9, y: 84.8, w: 20, h: 9.5 }
];

const imageWrapper = document.getElementById('imageWrapper');
const legendEl     = document.getElementById('legend');

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

    el.addEventListener('click', () => window.location.href = hs.url);
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        window.open(hs.url, '_blank');
      }
    });
    imageWrapper.appendChild(el);
  });
}

function buildLegend() {
  hotspots.forEach(hs => {
    const item = document.createElement('div');
    item.className = 'legend-item';
    item.innerHTML = `<span class="legend-dot"></span>${hs.label}`;
    item.addEventListener('click', () => window.location.href = hs.url);
    legendEl.appendChild(item);
  });
}

buildHotspots();
buildLegend();
