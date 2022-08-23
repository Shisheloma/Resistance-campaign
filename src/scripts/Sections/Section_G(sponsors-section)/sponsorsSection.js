const getPopper = () => import('../../Common/popper');
const popper = position => getPopper().then(module => module.popper(position));

export const sponsorsSection = () => { 

    const container = document.querySelector('.sponsors-section .sponsors_footer');
    
    const clickHander = e => {
        e.preventDefault();
        popper('bottom right');
    };

    container.addEventListener('click', clickHander);
};