import { throttleFrame } from '../../../utils/throttleFrame'; 
import { popper } from '../../popper'; 
import { container, navButton } from './navModalNodes';  

export const navModalClickHandler = e => {  
    if (e.target.classList.contains('nav_modal_logo') || 
        e.target.classList.contains('nav_logo_item') || 
        e.target.classList.contains('nav_modal') ||
        e.target.classList.contains('nav_modal_body_title') || 
        e.key === "Escape") 
    {
            navToggle();
            return
    }
    if (e.target.classList.contains('nav_modal_body_list_item') || 
        e.target.classList.contains('nav_modal_body_footer_item')) 
    {
        popper('bottom right');
        return
    }
};

export const navToggle = () => {
    container.classList.toggle('nav_modal_active');
    const navButtonBox = navButton[0].getBoundingClientRect();
    const marginY = parseInt(window.getComputedStyle(navButton[0]).top);

    const configUpSide = {
        fwdInitialY: navButtonBox.top,
        fwdTargetY: marginY,
        backInitialY: window.innerHeight - marginY - navButtonBox.height,
        backTargetY: window.innerHeight - navButtonBox.bottom,
        opposite: 1,
    };

    const configDwnSide = {
        fwdInitialY: window.innerHeight - navButtonBox.bottom,
        fwdTargetY: marginY,
        backInitialY: window.innerHeight - marginY - navButtonBox.height,
        backTargetY: navButtonBox.top,
        opposite: 2,
    };

    let config; 
    (navButtonBox.top + navButtonBox.height/2 > window.innerHeight/2) ?
    config = configUpSide
    : config = configDwnSide;

    container.classList.contains('nav_modal_active')?
    slide(2, config.fwdInitialY, config.fwdTargetY, config.opposite)()
    :slide(2, config.backInitialY, config.backTargetY, config.opposite)();

    function slide(pxms, initialY, targetY, opposite) {
        let lastRun = new Date;
        let currentRun = lastRun;
        
        navButton[1].id = "";  
        navButton[2].id = "";  
        navButton[opposite].id = "head-opposite";  

        navButton[1].style.top = initialY + "px";
        navButton[1].style.bottom = "";  
        navButton[2].style.bottom = initialY + "px"; 
        navButton[2].style.top = "";  

        return function animate() {
            if (initialY <= targetY) return

            currentRun = new Date(); 

            if (currentRun - lastRun > 1/pxms) {
                initialY -= (currentRun - lastRun) * pxms;
                if (initialY < targetY) {
                    initialY = targetY;
                }
                navButton[1].style.top = initialY + "px";  
                navButton[2].style.bottom = initialY + "px";  
                lastRun = currentRun;
            }  
            requestAnimationFrame(animate);
        }
    } 
};

export const navModalScrollHandler = () => {
    if (container.classList.contains('nav_modal_active')) { 
        const marginY = parseInt(window.getComputedStyle(navButton[0]).top); 
        const height = parseInt(window.getComputedStyle(navButton[0]).height); 
        const holdTime = 1.17;
        const speed = 1.5;
        let ratio = holdTime * (window.scrollY / speed % window.innerHeight);
        
        if (ratio >  window.innerHeight - marginY - height) {
            ratio = window.innerHeight - marginY - height;
        } 
        if (ratio <  marginY) {
            ratio = marginY;
        }
        navButton[1].style.top = ratio + "px";  
        navButton[2].style.bottom = ratio + "px";  
    }
};

export const throttledNavModalScrollHandler = throttleFrame(navModalScrollHandler);
