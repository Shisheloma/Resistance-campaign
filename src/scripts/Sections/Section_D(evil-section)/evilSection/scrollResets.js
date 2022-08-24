import { dvhString } from "../../../Common/dynamicHeight";

import { keyframes, progress } from "./keyframes";
import { containerSticky, head, liquidLine, liquidStart, log, red } from "./nodes";

const { headTransform, logTransform } = progress; 

export const scrollResets = scroll => {
    if (scroll > keyframes[3]) {
        head.style.transform = 'translateX(-50%)'; 
    }      
    if (scroll > keyframes[4]) {
        red.classList.remove('evil_red_active'); 
    }        
    if (scroll > keyframes[5]) {
        log.classList.remove('grinder_log_active');
        head.style.clipPath = 'none'; 
        containerSticky.style.transform = `none`;
    }
    if (scroll > keyframes[6]) {
        liquidLine.setAttribute('y2', 40);
    }
    if (scroll > keyframes[7]) { 
        liquidStart.classList.remove('grinder_liquid_active');
    }
    if (scroll < keyframes[4]) {
        const headY = headTransform.y[6];
        const headAngle = headTransform.angle[6];
        head.style.transform = `translate(-50%, ${dvhString(headY)}) rotate(${headAngle}deg)`;

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
    }        
    if (scroll < keyframes[5]) {
        log.classList.add('grinder_log_active');
        const logX = logTransform[6]; 
        log.style.transform = `translateX(${dvhString(logX)})`;
    } 
};