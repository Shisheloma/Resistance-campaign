import { container, navButton } from './Modules/navModalNodes'; 
 
const getHandlers = () => import('./Modules/navModalHandlers');
const navModalClickHandler = e => getHandlers().then(module => module.navModalClickHandler(e));
const throttledNavModalScrollHandler = e => getHandlers().then(module => module.throttledNavModalScrollHandler(e));

export const navModal = () => {
    navButton[0].addEventListener('click', navModalClickHandler);
    container.addEventListener('click', navModalClickHandler);
    document.addEventListener('keydown', navModalClickHandler);
    document.addEventListener('scroll', throttledNavModalScrollHandler); 
};

export const navModalHoldEsc = () => {
    document.removeEventListener('keydown', navModalClickHandler);
};

export const navModalResumeEsc = () => {
    document.addEventListener('keydown', navModalClickHandler);
};