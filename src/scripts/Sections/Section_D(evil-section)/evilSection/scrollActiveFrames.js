import { keyframes, progress } from "./keyframes";
import { containerSticky, head, liquidLine, liquidStart, log, red, saw } from "./nodes";

const { sawTransform, headTransform, logTransform, sticky  } = progress; 

export const scrollActiveFrames = scroll => {
    if (scroll > keyframes[0]) {
        const sawX = sawTransform.x[0] + scroll;
        const sawY = sawTransform.y[0];
        const sawAngle = sawTransform.angle[0];
        saw.style.transform = `translate(${sawX}vh, ${sawY}vh) rotate(${sawAngle}deg)`;  
        return
    }
    if (scroll > keyframes[1]) { 
        const sawX = sawTransform.x[1] - 1.5 * scroll;
        const sawY = sawTransform.y[1] - 0.75 * scroll;
        const sawAngle = sawTransform.angle[1];
        saw.style.transform = `translate(${sawX}vh, ${sawY}vh) rotate(${sawAngle}deg)`; 
        return
    }
    if (scroll > keyframes[2]) {
        const sawX = sawTransform.x[2] + scroll;
        const sawY = sawTransform.y[2];
        const sawAngle = sawTransform.angle[2];
        saw.style.transform = `translate(${sawX}vh, ${sawY}vh) rotate(${sawAngle}deg)`; 
        return
    }
    if (scroll > keyframes[3]) {
        const sawX = sawTransform.x[3] - 1.5 * scroll;
        const sawY = sawTransform.y[3] - 0.75 * scroll;
        const sawAngle = sawTransform.angle[3];
        saw.style.transform = `translate(${sawX}vh, ${sawY}vh) rotate(${sawAngle}deg)`; 
        return
    }
    if (scroll > keyframes[4]) {
        const sawX = sawTransform.x[4] + scroll;
        const sawY = sawTransform.y[4];
        const sawAngle = sawTransform.angle[4];
        saw.style.transform = `translate(${sawX}vh, ${sawY}vh) rotate(${sawAngle}deg)`; 
        
        const headY = headTransform.y[4] - scroll / 2;
        const headAngle = headTransform.angle[4]  - scroll / 4;
        head.style.transform = `translate(-50%, ${headY}vh) rotate(${headAngle}deg)`; 
        return
    }
    if (scroll > keyframes[5]) {
        const sawX = sawTransform.x[5] - scroll;
        const sawY = sawTransform.y[5]; 
        const sawAngle = sawTransform.angle[5] - scroll / 3;
        saw.style.transform = `translate(${sawX}vh, ${sawY}vh) rotate(${sawAngle}deg)`; 
        
        const headY = headTransform.y[5] - scroll / 2;
        const headAngle = headTransform.angle[5]  - scroll / 4;
        head.style.transform = `translate(-50%, ${headY}vh) rotate(${headAngle}deg)`;

        if (scroll < (keyframes[4] + keyframes[5]) / 2.2) {
            const clipSin = Math.sin(headAngle * Math.PI/180);
            const clipSpeed = 1.5 * headY;
            const clipOffset = 135;
            red.classList.add('evil_red_active');
            head.style.clipPath = `polygon(
                0% 0%, 
                100% 0%, 
                100% ${clipOffset - clipSpeed * (1 + clipSin)}%, 
                0% ${clipOffset - clipSpeed * (1 - clipSin)}%`; 
        }
        return
    } 
    if (scroll > keyframes[6]) {
        const logX = logTransform[5] - scroll / 3; 
        log.style.transform = `translateX(${logX}vh)`;

        const stickyY = sticky[6] + scroll / 3; 
        containerSticky.style.transform = `translateY(${stickyY}vh)`;
        return
    }
    if (scroll > keyframes[7]) {
        liquidStart.classList.add('grinder_liquid_active');
        const clipLiq = scroll * (1 - scroll / keyframes[6]) / 8 + 35; 
        liquidStart.style.clipPath  = `polygon(0% 0%, 100% 0%, 100% ${clipLiq + 15}%, 0% ${clipLiq - 30}%)`;   
        
        const stickyY =  sticky[7] - scroll * (1 - scroll / keyframes[6]) / 8;
        containerSticky.style.transform = `translateY(${stickyY}vh)`;
        
        let lineHeight;
        lineHeight = Math.min(-stickyY / 2 + 28, 91);
        if (clipLiq < 49) lineHeight -= 2; 
        liquidLine.setAttribute('y2', lineHeight);
        return
    }
};