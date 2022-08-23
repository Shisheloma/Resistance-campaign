import { throttleFrame } from '../../../utils/throttleFrame'; 
import { scrolledRatio } from '../../../utils/scrolledRatio'; 

import { container, egg, escapeEgg, escapeSponsors } from './videoScroll/nodes';
import { keyframes } from './videoScroll/keyframes';

export const videoScroll = () => {
    
    const scrollDirection = (prevScroll, scroll) => (prevScroll > scroll) ? 'down'  :'up';
    const getScrollActiveFrames = () => import('./videoScroll/scrollActiveFrames');
    let prevScroll;
    
    const videoScrollHandler = () => {
        const overShoot = 0;
        const speed = 90;  
        const scroll = scrolledRatio(container, speed, overShoot); 

        const direction = scrollDirection(prevScroll, scroll);
        prevScroll = scroll;  

        // resets
        if (scroll < 0) {   
            escapeEgg.classList.add(`hidden`);   
            egg.style.transform = `none`;   
            escapeSponsors.style.top = `10vh`;  
        } 
        
        // return if out of keyframe boundaries
        const start = keyframes[0] + speed * (1 + Math.max(overShoot, 0));
        const end = keyframes[keyframes.length - 1];
        if (scroll > start || scroll < end) { 
            return
        }
        
        // active keyframes
        getScrollActiveFrames().then(module => { 
            const scrollActiveFrames = module.scrollActiveFrames;
            scrollActiveFrames(scroll, direction);
        });
    };

    const throttledVideoScrollHandler = throttleFrame(videoScrollHandler);
    
    document.addEventListener('scroll', throttledVideoScrollHandler); 
    document.addEventListener('resize', throttledVideoScrollHandler); 
};