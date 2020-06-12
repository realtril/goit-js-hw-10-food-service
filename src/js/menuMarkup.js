import menu from '../menu.json';
import itemMenu from '../templates/itemMenu.hbs';
import refs from './refs.js';

const AllLi = menu.map(item => itemMenu(item)).join('');
refs.list.insertAdjacentHTML('beforeend', AllLi);
