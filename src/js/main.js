import {forEachPolyfill} from './utils/polyfill-foreach';
import {initIe11Download} from './utils/init-ie11-download';
import {menu} from './utils/menu'

// Utils
// ---------------------------------
forEachPolyfill();
initIe11Download();

menu(`.top-menu__left-menu`, `.top-menu__left-menu-burger`, `.top-menu__left-menu-overlay`);
menu(`.top-menu__nav`, `.top-menu__nav-toggle-burger`, `.top-menu__nav-toggle-overlay`);


// Modules
// ---------------------------------
