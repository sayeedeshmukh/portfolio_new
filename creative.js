document.addEventListener('DOMContentLoaded', function() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  const contentEl = document.getElementById('creative-content');
  const notFoundEl = document.getElementById('creative-not-found');

  if (!id || !CREATIVE_DATA[id]) {
    contentEl.style.display = 'none';
    notFoundEl.style.display = 'block';
    return;
  }

  const p = CREATIVE_DATA[id];

  let screenshotsHtml = '';
  if (p.screenshots && p.screenshots.length > 0) {
    screenshotsHtml = p.screenshots
      .map(src => `<img src="${src}" alt="${p.name}">`)
      .join('');
  } else {
    screenshotsHtml = '<div class="screenshot-placeholder">Add screenshots to creative-data.js</div>';
  }

  let ctaHtml = '';
  if (p.link) {
    ctaHtml = `<a href="${p.link}" target="_blank" rel="noopener noreferrer">View full work →</a>`;
  }

  contentEl.innerHTML = `
    <div class="project-header">
      <h1 class="project-title">${p.name}</h1>
      <p class="project-tagline">${p.description}</p>
    </div>

    <h3 class="section-title">What it is</h3>
    <p class="section-content">${p.whatItIs}</p>

    <h3 class="section-title">Gallery</h3>
    <div class="project-screenshots">${screenshotsHtml}</div>

    <h3 class="section-title">Why I do it</h3>
    <p class="section-content">${p.whyBuilt}</p>

    ${ctaHtml ? `<div class="project-ctas">${ctaHtml}</div>` : ''}
  `;

  document.title = `${p.name} | Sayee Deshmukh Portfolio`;
});
