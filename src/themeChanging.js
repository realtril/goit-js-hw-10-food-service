let darkTheme = localStorage.getItem('darkTheme');
const inputSwitcher = document.querySelector('input.js-switch-input');
const page = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const enabledarkTheme = () => {
  page.classList.add(Theme.DARK);
  localStorage.setItem('darkTheme', 'enabled');
};

const disabledarkTheme = () => {
  page.classList.remove(Theme.DARK);
  localStorage.setItem('darkTheme', null);
};

if (darkTheme === 'enabled') {
  enabledarkTheme();
  inputSwitcher.checked = true;
}

inputSwitcher.addEventListener('change', () => {
  darkTheme = localStorage.getItem('darkTheme');
  if (darkTheme !== 'enabled') {
    enabledarkTheme();
  } else {
    disabledarkTheme();
  }
});
