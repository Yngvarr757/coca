export const useTheme = () => {
  const themeTarget = document.querySelector('[data-theme]');
  const switcher = document.querySelector('.header__switcher-checkbox');

  const themeTargetDataSet = themeTarget.dataset;

  const theme = localStorage.getItem('theme') || 'light';
  themeTargetDataSet.theme = theme;

  if (theme === 'dark') {
    switcher.checked = true;
  }

  switcher.addEventListener('click', () => {
    if (themeTargetDataSet.theme == 'light') {
      themeTargetDataSet.theme = 'dark';
      localStorage.setItem('theme', 'dark');
    } else {
      themeTargetDataSet.theme = 'light';
      localStorage.setItem('theme', 'light');
    }
  });
};
