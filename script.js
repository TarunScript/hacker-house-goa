/* ════════════════════════════════════════════════════════════
   HACKER HOUSE GOA 2026 – BUILDER ID GENERATOR LOGIC
   ════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // 1. Element References
  const photoInput     = document.getElementById('photoInput');
  const cardPhotoImg   = document.getElementById('cardPhotoImg');
  const nameInput      = document.getElementById('nameInput');
  const roleSelect     = document.getElementById('roleSelect');
  const titleInput     = document.getElementById('titleInput');
  const builderIdInput = document.getElementById('builderIdInput');
  const locationInput  = document.getElementById('locationInput');
  const randomTitleBtn = document.getElementById('randomTitleBtn');
  const downloadBtn    = document.getElementById('downloadBtn');
  const shareBtn       = document.getElementById('shareBtn');

  const cardName       = document.getElementById('cardName');
  const cardTitle      = document.getElementById('cardTitle');
  const cardRole       = document.getElementById('cardRole');
  const cardBuilderId  = document.getElementById('cardBuilderId');
  const cardStack      = document.getElementById('cardStack');
  const cardLocation   = document.getElementById('cardLocation');
  const barcodeText    = document.getElementById('barcodeText');
  const cardTime       = document.getElementById('cardTime');
  const toast          = document.getElementById('toast');

  // 2. Barcode Generator
  function renderBarcode() {
    const container = document.getElementById('barcode');
    if (!container) return;
    container.innerHTML = '';
    const widths = [3,1,2,1,1,3,2,1,1,2,3,1,2,1,3,1,1,2,1,3,2,1,1,3,1,2,1,1,3,2,1,2,1,3,1,1,2,3,1,2,1,1,3,1,2,2,1,3,1,1,2,1,3,2,1,1,3,1,2,1,2,3,1,1,2,1,3,1,2,1];
    widths.forEach((w, i) => {
      const bar = document.createElement('div');
      bar.className = 'bar';
      bar.style.width = (w * 2) + 'px';
      bar.style.opacity = i % 7 === 0 ? '0.85' : '1';
      container.appendChild(bar);
    });
  }
  renderBarcode();

  // 3. Time Display
  function updateTime() {
    if (!cardTime) return;
    const now = new Date();
    let h = now.getHours();
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    const m = String(now.getMinutes()).padStart(2, '0');
    cardTime.textContent = `${h}:${m} ${ampm}`;
  }
  updateTime();
  setInterval(updateTime, 30000);

  // 4. Live Profile Sync
  if (nameInput && cardName) {
    nameInput.addEventListener('input', () => {
      cardName.textContent = nameInput.value.toUpperCase() || 'YOUR NAME';
    });
  }

  if (roleSelect && cardRole && cardStack) {
    const roleMap = {
      'FULL STACK DEVELOPER': 'FULL STACK',
      'FRONTEND DEVELOPER':   'FRONTEND',
      'BACKEND DEVELOPER':    'BACKEND',
      'AI / ML ENGINEER':     'AI / ML',
      'DEVOPS ENGINEER':      'DEVOPS',
      'BLOCKCHAIN DEVELOPER': 'WEB3',
      'MOBILE DEVELOPER':     'MOBILE',
      'UI/UX DESIGNER':       'DESIGN',
    };
    roleSelect.addEventListener('change', () => {
      cardRole.textContent = roleSelect.value;
      cardStack.textContent = roleMap[roleSelect.value] || 'FULL STACK';
    });
  }

  if (titleInput && cardTitle) {
    titleInput.addEventListener('input', () => {
      cardTitle.textContent = titleInput.value.toUpperCase() || 'BUILDER TITLE';
    });
  }

  if (builderIdInput && cardBuilderId) {
    builderIdInput.addEventListener('input', () => {
      const id = builderIdInput.value.replace(/\D/g, '').slice(0, 4) || '0000';
      cardBuilderId.textContent = `HH-GOA-${id}`;
      if (barcodeText) barcodeText.textContent = `HHGOA-${id}`;
    });
  }

  if (locationInput && cardLocation) {
    locationInput.addEventListener('input', () => {
      cardLocation.textContent = locationInput.value.toUpperCase() || 'GOA, INDIA';
    });
  }

  // 5. Random Title Button
  const TITLES = [
    'TERMINAL WIZARD', 'CODE ALCHEMIST', 'BUG WHISPERER', 'PIXEL NINJA',
    'STACK OVERLORD', 'DEPLOY CAPTAIN', 'BYTE BENDER', 'MERGE MASTER',
    'FUNCTION FORGER', 'CACHE COMMANDER', 'BUILD BREAKER', 'NODE NOMAD',
    'TYPE ARCHITECT', 'API ARTISAN', 'DEBUG DRUID', 'QUERY KING',
    'SHIP CAPTAIN', 'CLOUD SURFER', 'HASH HUNTER', 'LOOP LORD',
  ];
  if (randomTitleBtn && titleInput && cardTitle) {
    randomTitleBtn.addEventListener('click', () => {
      const current = titleInput.value.toUpperCase();
      let next;
      do { next = TITLES[Math.floor(Math.random() * TITLES.length)]; } while (next === current && TITLES.length > 1);
      titleInput.value = next;
      cardTitle.textContent = next;
      randomTitleBtn.style.transform = 'rotate(360deg)';
      setTimeout(() => { randomTitleBtn.style.transform = ''; }, 400);
    });
  }

  // 6. PHOTO UPLOAD & DISPLAY (CLEAN REWRITE)
  function applyPhoto(file) {
    if (!file) return;

    showToast('Loading photo…');
    const reader = new FileReader();
    reader.onload = function(e) {
      const dataUrl = e.target.result;
      if (cardPhotoImg) {
        cardPhotoImg.src = dataUrl;
        cardPhotoImg.style.display = 'block';
      }
      showToast('Photo updated! ✓');
    };
    reader.onerror = function() {
      showToast('Error reading image file');
    };
    reader.readAsDataURL(file);
  }

  if (photoInput) {
    photoInput.addEventListener('change', function() {
      if (this.files && this.files.length > 0) {
        applyPhoto(this.files[0]);
      }
    });
  }

  // Drag & drop support
  const dropZone = document.getElementById('uploadDropZone');
  if (dropZone) {
    dropZone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropZone.classList.add('drag-active');
    });
    dropZone.addEventListener('dragleave', () => {
      dropZone.classList.remove('drag-active');
    });
    dropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropZone.classList.remove('drag-active');
      if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        applyPhoto(e.dataTransfer.files[0]);
      }
    });
  }

  // 7. Download Card as High-Res PNG
  if (downloadBtn) {
    downloadBtn.addEventListener('click', async () => {
      downloadBtn.disabled = true;
      downloadBtn.textContent = 'Rendering…';
      try {
        const card = document.getElementById('id-card');
        const canvas = await html2canvas(card, {
          scale: 3,
          useCORS: true,
          allowTaint: true,
          backgroundColor: null,
          logging: false,
          letterRendering: true,
        });
        const link = document.createElement('a');
        const userName = (nameInput ? nameInput.value.trim().replace(/\s+/g, '_') : '') || 'Builder';
        link.download = `HackerHouse_Goa_2026_${userName}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
        showToast('Card downloaded! 🎉');
      } catch (err) {
        console.error('Download error:', err);
        showToast('Download failed');
      } finally {
        downloadBtn.disabled = false;
        downloadBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Download Card`;
      }
    });
  }

  // 8. Share on X
  if (shareBtn) {
    shareBtn.addEventListener('click', () => {
      const name  = (nameInput ? nameInput.value.trim() : '') || 'a builder';
      const title = (titleInput ? titleInput.value.trim() : '') || 'Terminal Wizard';
      const text  = `🏗️ Just generated my Builder ID for Hacker House Goa 2026!\n\n` +
        `Name: ${name}\nTitle: ${title}\n\nSee you in Goa! 🌴\n\n#FrameInGoa #HackerHouseGoa #BuilderID`;
      const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank', 'width=600,height=400');
    });
  }

  // 9. Toast Notification
  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
  }
});
