import refs from './refs';
import { Theme } from './themes';

let darkTheme = localStorage.getItem('darkTheme');
const enabledarkTheme = () => {
  refs.page.classList.add(Theme.DARK);
  localStorage.setItem('darkTheme', 'enabled');
};

const disabledarkTheme = () => {
  refs.page.classList.remove(Theme.DARK);
  localStorage.setItem('darkTheme', null);
};

if (darkTheme === 'enabled') {
  enabledarkTheme();
  refs.inputSwitcher.checked = true;
}

refs.inputSwitcher.addEventListener('change', () => {
  darkTheme = localStorage.getItem('darkTheme');
  if (darkTheme !== 'enabled') {
    enabledarkTheme();
  } else {
    disabledarkTheme();
  }
});
