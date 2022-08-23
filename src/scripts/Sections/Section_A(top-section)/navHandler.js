const getPopper = () => import('../../Common/popper');
const popper = position => getPopper().then(module => module.popper(position));

export const navHandler = () => { 
    const container = document.querySelectorAll('.top-section .nav_side');

    const clickHander = e => {
        const position = e.target.getAttribute('data-popper-position');
        popper(position);
    };

    container.forEach(instance => instance.addEventListener('click', clickHander));
};