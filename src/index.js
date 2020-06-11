import './styles.css';
import './themeChanging';
import menu from './menu.json';
import itemMenu from './templates/itemMenu.hbs';
const list = document.querySelector('.js-menu');

const AllLi = menu.map(item => itemMenu(item)).join('');
list.insertAdjacentHTML('beforeend', AllLi);
