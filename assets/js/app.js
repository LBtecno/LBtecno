/**
 * LBtecno Blog & Digital Store - Lógica Principal (Luminous Professional Style)
 * Basado en ejemplo/code.html y ejemplo/DESIGN.md
 */

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const postsGrid = document.getElementById('postsGrid');
  const categoryFilters = document.getElementById('categoryFilters');
  const postsCount = document.getElementById('postsCount');
  const postModal = new bootstrap.Modal(document.getElementById('postModal'));

  let activeCategory = 'Todos';
  let searchTerm = '';

  /**
   * Mapeo de íconos Material Symbols por categoría
   */
  function getCategoryIcon(category) {
    const icons = {
      'Software': 'terminal',
      'Plantillas': 'dashboard',
      'Plugins': 'extension',
      'Scripts': 'code',
      'Recursos': 'folder_zip'
    };
    return icons[category] || 'sell';
  }

  /**
   * Inicializa botones de filtro por categoría
   */
  function initCategories() {
    const categories = ['Todos', ...new Set(postsData.map(post => post.category))];
    categoryFilters.innerHTML = categories.map(cat => `
      <button class="btn-filter ${cat === activeCategory ? 'active' : ''}" data-category="${cat}">
        ${cat}
      </button>
    `).join('');

    categoryFilters.querySelectorAll('.btn-filter').forEach(btn => {
      btn.addEventListener('click', (e) => {
        categoryFilters.querySelectorAll('.btn-filter').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        activeCategory = e.target.getAttribute('data-category');
        renderPosts();
      });
    });
  }

  /**
   * Filtra las publicaciones
   */
  function getFilteredPosts() {
    return postsData.filter(post => {
      const matchesCategory = activeCategory === 'Todos' || post.category === activeCategory;
      const searchLower = searchTerm.toLowerCase().trim();

      const matchesSearch = !searchLower ||
        post.title.toLowerCase().includes(searchLower) ||
        post.shortDescription.toLowerCase().includes(searchLower) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
        post.category.toLowerCase().includes(searchLower);

      return matchesCategory && matchesSearch;
    });
  }

  /**
   * Renderiza la vista previa multimedia (Imagen vs Video YouTube)
   */
  function renderCardMedia(post) {
    if (post.type === 'video' && post.youtubeId) {
      return `
        <div class="card-media-wrapper position-relative">
          <div class="ratio ratio-16x9">
            <iframe 
              src="https://www.youtube-nocookie.com/embed/${post.youtubeId}?rel=0" 
              title="${post.title}" 
              allowfullscreen
              loading="lazy">
            </iframe>
          </div>
          <span class="card-media-badge"><span class="material-symbols-outlined text-danger text-sm">video_library</span> Video Demo</span>
        </div>
      `;
    }

    const imageUrl = post.mediaUrl || 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800';
    return `
      <div class="card-media-wrapper">
        <img src="${imageUrl}" class="card-img-top" alt="${post.title}" loading="lazy">
        <span class="card-media-badge"><span class="material-symbols-outlined text-primary text-sm">${getCategoryIcon(post.category)}</span> ${post.category}</span>
      </div>
    `;
  }

  /**
   * Renderiza la grilla de publicaciones estilo Luminous Professional
   */
  function renderPosts() {
    const filtered = getFilteredPosts();
    postsCount.textContent = `${filtered.length} ${filtered.length === 1 ? 'publicación' : 'publicaciones'}`;

    if (filtered.length === 0) {
      postsGrid.innerHTML = `
        <div class="col-12">
          <div class="empty-state">
            <span class="material-symbols-outlined display-4 text-primary opacity-50 mb-3">search_off</span>
            <h4 class="fw-bold text-dark">No se encontraron publicaciones</h4>
            <p class="text-muted">Intenta buscar con otros términos o seleccionar otra categoría.</p>
          </div>
        </div>
      `;
      return;
    }

    postsGrid.innerHTML = filtered.map(post => `
      <div class="col-md-6 col-lg-4">
        <article class="lb-card">
          ${renderCardMedia(post)}
          <div class="card-body-content">
            <div class="card-meta mb-2">
              <span class="category-tag">
                <span class="material-symbols-outlined text-sm">sell</span> ${post.category}
              </span>
              <span class="text-muted">${post.date}</span>
            </div>
            <h3 class="card-title">${post.title}</h3>
            <p class="card-text">${post.shortDescription}</p>
            
            <div class="d-flex gap-2 mb-3">
              <span class="meta-chip"><span class="material-symbols-outlined text-sm">database</span> ${post.fileSize}</span>
              <span class="meta-chip"><span class="material-symbols-outlined text-sm">update</span> ${post.version}</span>
            </div>

            <div class="card-footer-action">
              <button class="btn btn-lb-outline flex-grow-1 btn-view-post" data-id="${post.id}">
                <span class="material-symbols-outlined text-sm">visibility</span> Detalle
              </button>
              <a href="${post.downloadUrl}" download="${post.downloadFileName || ''}" class="btn btn-lb-primary flex-grow-1">
                <span class="material-symbols-outlined text-sm">download</span> Descargar
              </a>
            </div>
          </div>
        </article>
      </div>
    `).join('');

    // Listener para los botones de detalle
    document.querySelectorAll('.btn-view-post').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const postId = e.currentTarget.getAttribute('data-id');
        openPostModal(postId);
      });
    });
  }

  /**
   * Abre y llena la información del modal
   */
  function openPostModal(postId) {
    const post = postsData.find(p => p.id === postId);
    if (!post) return;

    document.getElementById('modalPostTitle').textContent = post.title;
    document.getElementById('modalPostCategory').textContent = post.category;
    document.getElementById('modalPostDate').textContent = post.date;
    document.getElementById('modalPostVersion').textContent = post.version;
    document.getElementById('modalPostSize').textContent = post.fileSize;

    // Media Modal
    const mediaContainer = document.getElementById('modalPostMedia');
    if (post.type === 'video' && post.youtubeId) {
      mediaContainer.innerHTML = `
        <div class="ratio ratio-16x9 rounded-3 overflow-hidden mb-3">
          <iframe 
            src="https://www.youtube-nocookie.com/embed/${post.youtubeId}?autoplay=1&rel=0" 
            title="${post.title}" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>
      `;
    } else {
      mediaContainer.innerHTML = `
        <img src="${post.mediaUrl}" class="img-fluid rounded-3 mb-3 w-100" alt="${post.title}" style="max-height: 380px; object-fit: cover;">
      `;
    }

    // Contenido
    document.getElementById('modalPostContent').innerHTML = post.content;

    // Fragmento de Código
    const codeContainer = document.getElementById('modalPostCode');
    const hasCodeSnippet = post.codeSnippet && post.codeSnippet.code && post.codeSnippet.code.trim() !== '';
    if (hasCodeSnippet) {
      codeContainer.innerHTML = `
        <div class="code-block-container">
          <div class="code-block-header">
            <span><span class="material-symbols-outlined text-sm align-middle me-1">code</span> ${post.codeSnippet.title || 'Ejemplo de Código'}</span>
            <button class="btn-copy" onclick="copyCodeSnippet(this)">
              <span class="material-symbols-outlined text-sm align-middle me-1">content_copy</span> Copiar
            </button>
          </div>
          <div class="code-block-body">
            <pre><code class="language-${post.codeSnippet.language || 'text'}">${escapeHtml(post.codeSnippet.code)}</code></pre>
          </div>
        </div>
      `;
      codeContainer.classList.remove('d-none');
    } else {
      codeContainer.classList.add('d-none');
      codeContainer.innerHTML = '';
    }

    // Enlaces externos
    const linksContainer = document.getElementById('modalPostLinks');
    if (post.externalLinks && post.externalLinks.length > 0) {
      linksContainer.innerHTML = post.externalLinks.map(link => `
        <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-lb-outline me-2 mb-2">
          <span class="material-symbols-outlined text-sm align-middle me-1">open_in_new</span> ${link.label}
        </a>
      `).join('');
      linksContainer.classList.remove('d-none');
    } else {
      linksContainer.classList.add('d-none');
      linksContainer.innerHTML = '';
    }

    // Botón de Demo
    const demoBtn = document.getElementById('modalPostDemoBtn');
    if (demoBtn) {
      if (post.demoUrl) {
        demoBtn.setAttribute('href', post.demoUrl);
        demoBtn.classList.remove('d-none');
      } else {
        demoBtn.classList.add('d-none');
      }
    }

    // Botón de Descarga
    const downloadBtn = document.getElementById('modalPostDownloadBtn');
    downloadBtn.setAttribute('href', post.downloadUrl);
    downloadBtn.setAttribute('download', post.downloadFileName || '');

    // Etiquetas (Tags)
    document.getElementById('modalPostTags').innerHTML = post.tags.map(t => `<span class="badge bg-secondary-container text-on-secondary-container me-1">#${t}</span>`).join('');

    postModal.show();
  }

  // Escuchador de búsqueda
  searchInput.addEventListener('input', (e) => {
    searchTerm = e.target.value;
    renderPosts();
  });

  // Inicializar
  initCategories();
  renderPosts();
});

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

function copyCodeSnippet(button) {
  const container = button.closest('.code-block-container');
  const codeText = container.querySelector('code').innerText;

  navigator.clipboard.writeText(codeText).then(() => {
    const originalText = button.innerHTML;
    button.innerHTML = `<span class="material-symbols-outlined text-sm text-success align-middle me-1">check_circle</span> Copiado!`;
    setTimeout(() => {
      button.innerHTML = originalText;
    }, 2000);
  }).catch(err => {
    console.error('Error al copiar código:', err);
  });
}
