import { throttleFrame } from '../../utils/throttleFrame'; 
import { fluidText } from '../../utils/fluidText'; 
import { scrolledRatio } from '../../utils/scrolledRatio'; 

export const missionSection = () => { 
    const container = document.querySelector('.mission-section');
    const text = document.querySelector('.intro_text'); 
    const textClone = text.insertAdjacentElement('afterend', text.cloneNode(true)); 
    const textFooter = document.querySelectorAll('.intro_text_footer'); 

    const sectionBScrollHandler = () => {
        const overShoot = 0.1;
        const speed = 110;
        const scroll = scrolledRatio(container, speed, overShoot);  
        let scrollWidth = scroll;
        
        // slow speed
        if (scroll < 15) scrollWidth = 15 + (scroll - 15) / 3; 
        // fast speed
        if (scroll < 4) scrollWidth = 4 + (scroll - 4) / 5; 
        // stick into place
        if (scroll < 2.2) scrollWidth = 0;  

        text.style.transform = `translateX(${-scrollWidth}vw)`;
        textClone.style.transform = `translateX(${scrollWidth}vw)`;  
    };
    
    const throttledSectionBScrollHandler = throttleFrame(sectionBScrollHandler);

    document.addEventListener('scroll', throttledSectionBScrollHandler);
    document.addEventListener('resize', throttledSectionBScrollHandler);
    
    fluidText(text, 12, 44, 0.75); 
    fluidText(textClone, 12, 44, 0.75); 
    textFooter.forEach(item => fluidText(item, 6, 30, 0.75)); 
};