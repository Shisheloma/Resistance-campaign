import { throttleFrame } from '../../utils/throttleFrame'; 
import { scrolledRatio } from '../../utils/scrolledRatio'; 

export const proceedingSection = () => { 
    const container = document.querySelector('.proceeding-section');  
    const text = container.querySelector('.text');  
 
    const scrollHandler = () => {
        const overShoot = -1;
        const speed = 90;
        const scroll = scrolledRatio(container, speed, overShoot);     

        const keyframes = [-speed, -(speed + 35), -210];
        
        const progress = [
            0, 
            -keyframes[0] / 10,
            -(keyframes[0] + 9 * keyframes[1]) / 10,
        ];
        
        // resets
        if (scroll > keyframes[0] + 20) {  
            text.style.transform = `none`
        }
        // return if out of keyframe boundaries
        if (scroll > (keyframes[0] + speed * (1 + Math.max(overShoot, 0))) || 
            scroll < keyframes[keyframes.length - 1]) { 
            return
        } 
        
        // active keyframes
        if (scroll > keyframes[0]) {  
            const scrollY = progress[0] - scroll / 10;
            text.style.transform = `translateY(${scrollY}vh)`;  
            return
        }  
        if (scroll > keyframes[1]) {  
            const scrollY = progress[1];
            text.style.transform = `translateY(${scrollY}vh)`;  
            return
        }
        if (scroll > keyframes[2]) { 
            const scrollY = progress[2] + 9 * scroll / 10;
            text.style.transform = `translateY(${scrollY}vh)`;  
            return
        }      
    };

    const throttledScrollHandler = throttleFrame(scrollHandler);
 
        document.addEventListener('scroll', throttledScrollHandler);
        document.addEventListener('resize', throttledScrollHandler); 
};