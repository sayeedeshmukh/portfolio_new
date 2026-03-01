document.addEventListener('DOMContentLoaded', function() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  const contentEl = document.getElementById('project-content');
  const notFoundEl = document.getElementById('project-not-found');

  if (!id || !PROJECTS_DATA[id]) {
    contentEl.style.display = 'none';
    notFoundEl.style.display = 'block';
    return;
  }

  const p = PROJECTS_DATA[id];

  let screenshotsHtml = '';
  if (p.screenshots && p.screenshots.length > 0) {
    screenshotsHtml = p.screenshots
      .map(src => `<img src="${src}" alt="${p.name} screenshot">`)
      .join('');
  } else {
    screenshotsHtml = '<div class="screenshot-placeholder">Add screenshots to projects-data.js</div>';
  }

  contentEl.innerHTML = `
    <div class="project-header">
      <h1 class="project-title">${p.name}</h1>
      <p class="project-tagline">${p.description}</p>
    </div>

    <h3 class="section-title">What it is</h3>
    <p class="section-content">${p.whatItIs}</p>

    <h3 class="section-title">Screenshots</h3>
    <div class="project-screenshots">${screenshotsHtml}</div>

    <h3 class="section-title">Why I built it</h3>
    <p class="section-content">${p.whyBuilt}</p>

    <div class="project-ctas">
      ${p.website ? `<a href="${p.website}" target="_blank" rel="noopener noreferrer">Visit live site →</a>` : ''}
      ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener noreferrer">View on GitHub →</a>` : ''}
    </div>
  `;

  document.title = `${p.name} | Sayee Deshmukh Portfolio`;
});
