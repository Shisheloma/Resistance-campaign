import { throttleFrame } from './throttleFrame'; 

export const fluidText = (el, minSize, maxSize, speed = 1, maxTargetWidth = 1920, maxTargetHeight = 900 ) => {   
    const resizer = () => { 
        const screenAreaRatio = (window.innerWidth * window.innerHeight) / (maxTargetWidth * maxTargetHeight);
        const currentSize = maxSize * (1 - (1 - screenAreaRatio) * speed);
        const limitedSize = Math.max(Math.min(currentSize, maxSize), minSize);
        el.style.fontSize = limitedSize + 'px'; 
    };

    const throttledResizer = throttleFrame(resizer);

    resizer(); // initial run
    window.addEventListener('resize', throttledResizer);
    window.addEventListener('orientationchange', throttledResizer); 
};  