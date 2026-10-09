(() => {
  let saved;
  try { saved = localStorage.getItem('infinity-loops-theme'); } catch { /* Use system preference when storage is unavailable. */ }
  const theme = saved === 'light' || saved === 'dark' ? saved : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#11191e' : '#fffefa');
})();
