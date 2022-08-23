import { throttleFrame } from '../../utils/throttleFrame'; 
import { scrolledRatio } from '../../utils/scrolledRatio'; 

import { container } from './evilSection/nodes'; 
import { keyframes } from './evilSection/keyframes';
import { scrollResets } from './evilSection/scrollResets'; 

export const evilSection = () => {    

    const getScrollActiveFrames = () => import('./evilSection/scrollActiveFrames');

    const scrollHandler = () => {
        const overShoot = 0.2;
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

    const throttledScrollHandler = throttleFrame(scrollHandler);

    document.addEventListener('scroll', throttledScrollHandler);
    document.addEventListener('resize', throttledScrollHandler);
};