import { throttleFrame } from '../../utils/throttleFrame'; 
import { scrolledRatio } from '../../utils/scrolledRatio'; 

import { scrollResets } from './wolfSection/scrollResets';
import { keyframes } from './wolfSection/keyframes';
import { container } from './wolfSection/nodes';

export const wolfSection = () => { 

    const getScrollActiveFrames = () => import('./wolfSection/scrollActiveFrames');

    const wolfScrollHandler = () => {
        const overShoot = -1;
        const speed = 100; 
        const scroll = scrolledRatio(container, speed, overShoot);   
        
        // resets
        scrollResets(scroll);
        
        // return if out of keyframe boundaries
        const start = keyframes[0] + speed * (1 + Math.max(overShoot, 0));
        const end = keyframes[keyframes.length - 1];
        if (scroll > start || scroll < end) { 
            return
        }
        
        // active keyframes
        getScrollActiveFrames().then(module => { 
            const scrollActiveFrames = module.scrollActiveFrames;
            scrollActiveFrames(scroll);
        });
    }; 

    const throttledWolfScrollHandler = throttleFrame(wolfScrollHandler);

    document.addEventListener('scroll', throttledWolfScrollHandler); 
    document.addEventListener('resize', throttledWolfScrollHandler); 
};