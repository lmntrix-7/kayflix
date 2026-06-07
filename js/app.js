const DATA = window.KAYFLIX_DATA || KAYFLIX_DATA;
let activeMemory = null;
let activeMediaIndex = 0;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function isVideo(src) {
  return /\.(mp4|webm|ogg)$/i.test(src || '');
}

function getMedia(memory) {
  return memory.media || memory.photos || [memory.cover];
}

function renderMedia(src, className = '') {
  if (isVideo(src)) {
    return `<video class="${className}" controls playsinline preload="metadata"><source src="${src}" type="video/mp4"></video>`;
  }
  return `<img class="${className}" src="${src}" alt="" loading="lazy">`;
}

function shortText(text, length = 110) {
  if (!text) return '';
  return text.length > length ? `${text.slice(0, length).trim()}...` : text;
}

function parseTimelineDate(value) {
  if (!value) return Number.MAX_SAFE_INTEGER;
  const parts = String(value).split('-').map(Number);
  const year = parts[0] || 9999;
  const month = parts[1] || 1;
  const day = parts[2] || 1;
  return new Date(year, month - 1, day).getTime();
}

function formatTimelineDate(value) {
  if (!value) return 'Soon';
  const parts = String(value).split('-');
  if (parts.length === 1) return parts[0];
  const date = new Date(Number(parts[0]), Number(parts[1] || 1) - 1, Number(parts[2] || 1));
  const month = date.toLocaleString('en-GB', { month: 'short' });
  if (parts.length === 2) return `${month} ${parts[0]}`;
  return `${Number(parts[2])} ${month} ${parts[0]}`;
}

function initIntro() {
  setTimeout(() => $('#intro')?.classList.add('hide'), 2500);
}

function renderFeatured() {
  const featured = DATA.memories.find((memory) => memory.id === 'happy-birthday-kay') || DATA.memories[0];
  const el = $('#featuredMemory');
  if (!el || !featured) return;
  el.innerHTML = `
    ${renderMedia(featured.cover, 'featured-bg')}
    <div class="featured-overlay">
      <p class="eyebrow">Featured Birthday Special</p>
      <h3>${featured.title}</h3>
      <p>${featured.story}</p>
      <button class="btn primary" type="button" data-memory-id="${featured.id}">Open Episode</button>
    </div>
  `;
}

function renderChapters() {
  const grid = $('#chapterGrid');
  if (!grid) return;
  grid.innerHTML = DATA.chapters.map((chapter) => `
    <article class="chapter-card">
      ${renderMedia(chapter.image)}
      <div class="chapter-body">
        <span class="memory-date">${chapter.number}</span>
        <h3>${chapter.title}</h3>
        <p>${chapter.description}</p>
      </div>
    </article>
  `).join('');
}

function renderFilters() {
  const filterRow = $('#filterRow');
  if (!filterRow) return;
  const categories = ['all', ...new Set(DATA.memories.map((memory) => memory.category))];
  filterRow.innerHTML = categories.map((category) => `
    <button class="filter-btn ${category === 'all' ? 'active' : ''}" type="button" data-filter="${category}">
      ${category.charAt(0).toUpperCase() + category.slice(1)}
    </button>
  `).join('');

  filterRow.addEventListener('click', (event) => {
    const button = event.target.closest('[data-filter]');
    if (!button) return;
    $$('.filter-btn').forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    renderMemories(button.dataset.filter);
  });
}

function renderMemories(filter = 'all') {
  const grid = $('#memoryGrid');
  if (!grid) return;
  const memories = filter === 'all' ? DATA.memories : DATA.memories.filter((memory) => memory.category === filter);
  grid.innerHTML = memories.map((memory) => `
    <button class="memory-card" type="button" data-memory-id="${memory.id}">
      ${renderMedia(memory.cover)}
      <div class="memory-body">
        <span class="memory-date">${memory.date} • ${formatTimelineDate(memory.timelineDate)}</span>
        <h3>${memory.title}</h3>
        <p>${shortText(memory.story)}</p>
      </div>
    </button>
  `).join('');
}

function renderAchievements() {
  const grid = $('#achievementGrid');
  if (!grid) return;
  grid.innerHTML = DATA.achievements.map((achievement) => `
    <article class="achievement-card">
      <div class="icon">${achievement.icon}</div>
      <h3>${achievement.title}</h3>
      <p>${achievement.text}</p>
    </article>
  `).join('');
}

function renderTimeline() {
  const track = $('#timelineTrack');
  const wrap = $('#timelineTrackWrap');
  if (!track) return;

  const memories = [...DATA.memories].sort((a, b) => parseTimelineDate(a.timelineDate) - parseTimelineDate(b.timelineDate));
  track.innerHTML = memories.map((memory) => `
    <article class="timeline-card">
      <div class="timeline-dot"></div>
      <button class="timeline-snapshot" type="button" data-memory-id="${memory.id}">
        ${renderMedia(memory.cover)}
        <div class="timeline-info">
          <span class="timeline-date">${formatTimelineDate(memory.timelineDate)}</span>
          <h3>${memory.title}</h3>
          <p>${memory.story}</p>
        </div>
      </button>
    </article>
  `).join('');

  requestAnimationFrame(() => {
    const width = track.scrollWidth || wrap?.scrollWidth || 0;
    wrap?.style.setProperty('--timeline-width', `${width}px`);
  });
}

function renderFutureGoals() {
  const list = $('#futureGoals');
  if (!list) return;
  list.innerHTML = DATA.futureGoals.map((goal) => `<li>${goal}</li>`).join('');
}

function openMemory(memoryId) {
  activeMemory = DATA.memories.find((memory) => memory.id === memoryId);
  activeMediaIndex = 0;
  if (!activeMemory) return;
  $('#memoryModal')?.classList.add('active');
  $('#memoryModal')?.setAttribute('aria-hidden', 'false');
  renderModal();
}

function renderModal() {
  if (!activeMemory) return;
  const media = getMedia(activeMemory);
  const src = media[activeMediaIndex];
  $('#modalMedia').innerHTML = renderMedia(src, 'modal-active-media');
  $('#modalDate').textContent = `${activeMemory.date} • ${formatTimelineDate(activeMemory.timelineDate)}`;
  $('#modalTitle').textContent = activeMemory.title;
  $('#modalStory').textContent = activeMemory.story;
  $('#mediaCount').textContent = `${activeMediaIndex + 1} / ${media.length}`;
}

function closeModal() {
  $('#memoryModal')?.classList.remove('active');
  $('#memoryModal')?.setAttribute('aria-hidden', 'true');
  $('#modalMedia').innerHTML = '';
}

function changeMedia(direction) {
  if (!activeMemory) return;
  const media = getMedia(activeMemory);
  activeMediaIndex = (activeMediaIndex + direction + media.length) % media.length;
  renderModal();
}

function bindEvents() {
  document.addEventListener('click', (event) => {
    const memoryButton = event.target.closest('[data-memory-id]');
    if (memoryButton) openMemory(memoryButton.dataset.memoryId);
    if (event.target.closest('[data-close-modal]')) closeModal();
  });

  $('#prevMedia')?.addEventListener('click', () => changeMedia(-1));
  $('#nextMedia')?.addEventListener('click', () => changeMedia(1));

  $('#timelinePrev')?.addEventListener('click', () => {
    $('#timelineTrackWrap')?.scrollBy({ left: -320, behavior: 'smooth' });
  });
  $('#timelineNext')?.addEventListener('click', () => {
    $('#timelineTrackWrap')?.scrollBy({ left: 320, behavior: 'smooth' });
  });

  $('#musicToggle')?.addEventListener('click', async () => {
    const audio = $('#bgMusic');
    const button = $('#musicToggle');
    if (!audio) return;
    try {
      if (audio.paused) {
        await audio.play();
        button?.classList.add('active');
      } else {
        audio.pause();
        button?.classList.remove('active');
      }
    } catch (error) {
      alert('Add assets/music/background.mp3 first, then the music button will work.');
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeModal();
    if (event.key === 'ArrowLeft') changeMedia(-1);
    if (event.key === 'ArrowRight') changeMedia(1);
  });
}

function init() {
  initIntro();
  renderFeatured();
  renderChapters();
  renderFilters();
  renderMemories();
  renderAchievements();
  renderTimeline();
  renderFutureGoals();
  bindEvents();
}

document.addEventListener('DOMContentLoaded', init);
