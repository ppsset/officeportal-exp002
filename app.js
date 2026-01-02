const data = {
  pulse: [
    {
      title: "Q3 kickoff & milestones",
      meta: "Announcement • 12 Oct",
      status: "live",
      statusClass: "info",
      description: "Roadmap for new hospital retrofit with MEP milestones and BIM coordination cadence.",
      image: "https://placehold.co/600x360/1f7a8c/ffffff?text=Milestones",
    },
    {
      title: "Micro-poll: new drafting tools",
      meta: "Poll • closes tomorrow",
      status: "poll",
      statusClass: "warning",
      description: "Vote on preferred load calculation workflow. AI sentiment is positive (71%).",
      image: "https://placehold.co/600x360/f59e0b/0f172a?text=Poll",
    },
    {
      title: "Office update: electrical room",
      meta: "Update • 10 Oct",
      status: "update",
      statusClass: "success",
      description: "Panelboard relocation completed; review new as-builts before Tuesday.",
      image: "https://placehold.co/600x360/0ea5e9/0f172a?text=Electrical+Room",
    },
  ],
  workshops: [
    {
      title: "Tower A – HVAC peer review",
      meta: "Today 15:00 • Room Beta",
      status: "in review",
      statusClass: "warning",
      description: "Checklist covers AHU sizing, chilled water balance, and duct static checks.",
      tags: ["HVAC", "QA"],
      image: "https://placehold.co/600x360/14b8a6/0f172a?text=HVAC+Review",
    },
    {
      title: "Podium lighting coordination",
      meta: "Wed 14:00 • Zoom 04",
      status: "scheduled",
      statusClass: "info",
      description: "Coordinate façade lighting circuits; mark dimming zones in Revit sheet L401.",
      tags: ["Lighting", "Revit"],
      image: "https://placehold.co/600x360/1f2937/f9fafb?text=Lighting",
    },
    {
      title: "Fire protection clash pass",
      meta: "Fri 09:30 • Room Delta",
      status: "ready",
      statusClass: "success",
      description: "Sprinkler heads vs ceiling grids; ensure valve rooms have clear access.",
      tags: ["Fire", "Clash"],
      image: "https://placehold.co/600x360/4f46e5/f9fafb?text=Fire+Review",
    },
  ],
  facility: [
    {
      title: "Room Beta",
      meta: "Today 10:00-11:30",
      status: "booked",
      statusClass: "warning",
      description: "Booked by design group for load calculation sync.",
      tags: ["12 seats", "Display"],
      image: "https://placehold.co/600x360/2563eb/f9fafb?text=Room+Beta",
    },
    {
      title: "Zoom 04",
      meta: "Available from 14:00",
      status: "open",
      statusClass: "success",
      description: "HD account with recording enabled and breakout rooms configured.",
      tags: ["HD", "Recording"],
      image: "https://placehold.co/600x360/10b981/f9fafb?text=Zoom+04",
    },
    {
      title: "Room Gamma",
      meta: "Next slot 16:00",
      status: "open",
      statusClass: "success",
      description: "Whiteboard + hybrid kit. Ideal for coordination stand-ups.",
      tags: ["8 seats", "Hybrid"],
      image: "https://placehold.co/600x360/f97316/0f172a?text=Room+Gamma",
    },
  ],
  defects: [
    {
      title: "UPS audible alarm",
      meta: "Critical • Level 3 server room",
      status: "critical",
      statusClass: "danger",
      description: "Battery module warning. Technicians requested, ETA 1 hr.",
      image: "https://placehold.co/600x360/d946ef/0f172a?text=UPS+Alarm",
    },
    {
      title: "FA panel loose wiring",
      meta: "Medium • Level 2 corridor",
      status: "investigating",
      statusClass: "warning",
      description: "Intermittent fault lamp flicker. Secure terminals and retest.",
      image: "https://placehold.co/600x360/facc15/0f172a?text=FA+Panel",
    },
    {
      title: "Chiller vibration",
      meta: "Low • Rooftop",
      status: "queued",
      statusClass: "info",
      description: "Slight vibration at part load; monitor trend and schedule bearing check.",
      image: "https://placehold.co/600x360/22c55e/0f172a?text=Chiller",
    },
  ],
  leaves: [
    {
      title: "Holiday – Phasit",
      meta: "20-24 Oct • Approved",
      status: "approved",
      statusClass: "success",
      description: "Annual leave during tower shutdown prep.",
      image: "https://placehold.co/600x360/0ea5e9/0f172a?text=Holiday",
    },
    {
      title: "Sick leave – Rada",
      meta: "Today • Pending",
      status: "pending",
      statusClass: "warning",
      description: "Flu symptoms, WFH suggested. Manager approval required.",
      image: "https://placehold.co/600x360/f97316/0f172a?text=Sick+Leave",
    },
    {
      title: "Business trip – Somchai",
      meta: "Next week • Draft",
      status: "draft",
      statusClass: "info",
      description: "Client walkthrough for hospital retrofit; flight booking in progress.",
      image: "https://placehold.co/600x360/14b8a6/0f172a?text=Business",
    },
  ],
  suggestions: [
    {
      title: "VRF quick reference",
      meta: "AI groups: documentation",
      status: "new",
      statusClass: "info",
      description: "Create a laminated VRF troubleshooting card for field teams.",
      image: "https://placehold.co/600x360/6366f1/f9fafb?text=VRF+Card",
    },
    {
      title: "Noise masking",
      meta: "AI groups: comfort",
      status: "review",
      statusClass: "warning",
      description: "Pilot white-noise emitters near open office to reduce distraction.",
      image: "https://placehold.co/600x360/22d3ee/0f172a?text=Noise+Masking",
    },
    {
      title: "Prefilled leave templates",
      meta: "AI groups: workflow",
      status: "accepted",
      statusClass: "success",
      description: "Use AI to prefill request details based on calendar context.",
      image: "https://placehold.co/600x360/fcd34d/0f172a?text=Templates",
    },
  ],
  well: [
    {
      floor: "2nd Floor",
      health: "Good",
      energy: "-4% vs last week",
      comfort: { pm25: 11, co: 0.6, co2: 720, temp: 24.2, noise: 48, lux: 320 },
      energyUse: 410,
      rec: "Keep windows closed during PM peak; schedule AHU flush at 18:00.",
      image: "https://placehold.co/600x360/0ea5e9/0f172a?text=Floor+2",
    },
    {
      floor: "3rd Floor",
      health: "Watch",
      energy: "+6% vs last week",
      comfort: { pm25: 22, co: 0.9, co2: 960, temp: 25.3, noise: 55, lux: 280 },
      energyUse: 520,
      rec: "Increase outside air 10% and dim corridor lights after 20:00 to save ~7%.",
      image: "https://placehold.co/600x360/f59e0b/0f172a?text=Floor+3",
    },
    {
      floor: "4th Floor",
      health: "Stable",
      energy: "+1% vs last week",
      comfort: { pm25: 15, co: 0.5, co2: 780, temp: 23.7, noise: 46, lux: 350 },
      energyUse: 445,
      rec: "Maintain current setpoints; AI suggests trimming reheat valves by 2% at night.",
      image: "https://placehold.co/600x360/22c55e/0f172a?text=Floor+4",
    },
    {
      floor: "5th Floor",
      health: "Attention",
      energy: "+9% vs last week",
      comfort: { pm25: 31, co: 1.1, co2: 1100, temp: 26.0, noise: 58, lux: 260 },
      energyUse: 610,
      rec: "Alert occupants to avoid printing clusters; schedule filter check and lower lighting to 60%.",
      image: "https://placehold.co/600x360/d946ef/0f172a?text=Floor+5",
    },
  ],
};

function renderCards(listId, items, type) {
  const container = document.getElementById(listId);
  if (!container) return;
  const fragment = document.createDocumentFragment();
  items.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <div class="card__header">
        <div>
          <h3>${item.title}</h3>
          <p class="meta">${item.meta}</p>
        </div>
        <span class="status ${item.statusClass}">${item.status}</span>
      </div>
      <div class="stack">
        <img src="${item.image}" alt="${item.title}">
        <p class="meta">${item.description}</p>
        ${item.tags ? `<div class="tag-row">${item.tags.map((t) => `<span class='tag'>${t}</span>`).join('')}</div>` : ''}
      </div>
    `;
    card.addEventListener('click', () => openDetail({ ...item, type }));
    fragment.appendChild(card);
  });
  container.innerHTML = '';
  container.appendChild(fragment);
}

function renderWell(items) {
  const container = document.getElementById('well-list');
  const fragment = document.createDocumentFragment();
  items.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'well-card';
    const percent = Math.min(100, Math.round((item.energyUse / 650) * 100));
    card.innerHTML = `
      <div class="card__header">
        <div>
          <h3>${item.floor}</h3>
          <p class="meta">Health: ${item.health}</p>
        </div>
        <span class="status ${item.health === 'Good' ? 'success' : item.health === 'Attention' ? 'danger' : 'warning'}">${item.energy}</span>
      </div>
      <img src="${item.image}" alt="${item.floor}">
      <div class="stack">
        <p class="meta">PM2.5 ${item.comfort.pm25} µg/m³ • CO ${item.comfort.co} ppm • CO₂ ${item.comfort.co2} ppm</p>
        <p class="meta">Temp ${item.comfort.temp}°C • Noise ${item.comfort.noise} dBA • Illumination ${item.comfort.lux} lux</p>
        <div class="trend-bar" aria-label="Energy usage">
          <span style="width:${percent}%"></span>
        </div>
        <p>${item.rec}</p>
      </div>
    `;
    card.addEventListener('click', () => openDetail({
      title: item.floor,
      meta: `Comfort & energy | ${item.health}`,
      description: item.rec,
      image: item.image,
      status: item.energy,
      statusClass: 'info',
      type: 'Well & Green',
    }));
    fragment.appendChild(card);
  });
  container.innerHTML = '';
  container.appendChild(fragment);
}

function openDetail(item) {
  const panel = document.getElementById('detail-panel');
  const overlay = document.getElementById('overlay');
  document.getElementById('detail-type').textContent = item.type;
  document.getElementById('detail-title').textContent = item.title;
  document.getElementById('detail-meta').textContent = item.meta || '';
  document.getElementById('detail-description').textContent = item.description;
  document.getElementById('detail-image').src = item.image;
  panel.classList.add('open');
  overlay.classList.add('show');
}

function closeDetail() {
  document.getElementById('detail-panel').classList.remove('open');
  document.getElementById('overlay').classList.remove('show');
  document.getElementById('signin-modal').classList.remove('open');
}

function setupScrolling() {
  document.querySelectorAll('[data-scroll]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-scroll');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

function setupSignin() {
  const modal = document.getElementById('signin-modal');
  const overlay = document.getElementById('overlay');
  document.getElementById('open-signin').addEventListener('click', () => {
    modal.classList.add('open');
    overlay.classList.add('show');
  });
  document.getElementById('close-signin').addEventListener('click', closeDetail);
  modal.querySelector('.signin-form').addEventListener('submit', (e) => {
    e.preventDefault();
    modal.classList.remove('open');
    overlay.classList.remove('show');
    alert('Signed in – sample flow for WAG Portal');
  });
}

function bindOverlay() {
  document.getElementById('overlay').addEventListener('click', closeDetail);
  document.getElementById('close-panel').addEventListener('click', closeDetail);
}

function init() {
  renderCards('pulse-list', data.pulse, 'Office Pulse');
  renderCards('workshop-list', data.workshops, 'Tech Workshop');
  renderCards('facility-list', data.facility, 'Shared Facility');
  renderCards('defect-list', data.defects, 'Defect Tracker');
  renderCards('leave-list', data.leaves, 'Leave Request');
  renderCards('suggestion-list', data.suggestions, 'Suggestion Box');
  renderWell(data.well);
  setupScrolling();
  setupSignin();
  bindOverlay();
}

document.addEventListener('DOMContentLoaded', init);
