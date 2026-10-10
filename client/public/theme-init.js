(() => {
  let saved;
  try { saved = localStorage.getItem('infinity-loops-theme'); } catch { /* Fall back to dark when storage is unavailable. */ }
  const theme = saved === 'light' ? 'light' : 'dark'; // dark by default; light only if the visitor chose it
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#11191e' : '#fffefa');
})();
