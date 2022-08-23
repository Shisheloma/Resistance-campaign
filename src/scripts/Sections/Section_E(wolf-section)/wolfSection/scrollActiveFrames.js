import { keyframes, progress } from "./keyframes"; 
import { egg, evil, panties, strokeOutput, textBottom, textLeft, textRight, wolf } from "./nodes";

export const scrollActiveFrames = scroll => {
    if (scroll > keyframes[0]) { 
        const wolfY = progress[0] - scroll/8;  
        wolf.style.transform = `translateY(${wolfY}vh)`;   
        return
    }
    if (scroll > keyframes[1]) { 
        const wolfY = progress[1] + 10 * scroll / 8; 
        wolf.style.transform = `translateY(${wolfY}vh)`;  
        return
    }
    if (scroll > keyframes[2]) { 
        const wolfY = progress[2] - scroll/4;  
        wolf.style.transform = `translateY(${wolfY}vh)`; 
        return
    }
    if (scroll > keyframes[3]) {
        const wolfY = progress[3] + scroll/4;  
        wolf.style.transform = `translateY(${wolfY}vh)`; 
        return
    }
    if (scroll > keyframes[4]) {  
        const wolfY = progress[4] + scroll/2; 
        wolf.style.transform = `translateY(${wolfY}vh)`; 

        const evilX = -(keyframes[3] - scroll) / 12;  
        const evilY = -35.65 - wolfY / 2.7;   
        const evilAngle = (keyframes[3] - scroll) / 6 - 5;   
        evil.style.transform = `translate(${evilX}vh, ${evilY}vh) rotate(${evilAngle}deg)`; 
        return
    }
    if (scroll > keyframes[5]) { 
        const wolfY = progress[5] + scroll/2; 
        wolf.style.transform = `translateY(${wolfY}vh)`; 
        
        const evilX = Math.min(-(keyframes[3] - 3 * keyframes[4] + 2 * scroll) / 12, 0);  
        const evilY = Math.min(-35.65 - wolfY / 2.7, 0);  
        const evilAngle = (keyframes[3] - 2 * keyframes[4] + scroll) / 6 - 5;  
        evil.style.transform = `translate(${evilX}vh, ${evilY}vh) rotate(${evilAngle}deg)`;   
        return
    }
    if (scroll > keyframes[6]) { 
        const wolfY = progress[6] + scroll/8; 
        wolf.style.transform = `translateY(${wolfY}vh)`;  
        
        const evilX = Math.min(-(keyframes[3] - 3 * keyframes[4] + 2 * scroll) / 12, 0);  
        const evilY = Math.min(-35.65 - wolfY / 2.7, 0);  
        const evilAngle = Math.max((keyframes[3] - 2 * keyframes[4] + scroll) / 6 - 5, 0);  
        evil.style.transform = `translate(${evilX}vh, ${evilY}vh) rotate(${evilAngle}deg)`;   
        
        const pantiesY = Math.min((keyframes[5] - scroll) / 6, 31.7);   
        panties.style.transform = `translate(-50%, ${pantiesY}vh)`;  
        return
    }
    if (scroll > keyframes[7]) { 
        const wolfY = progress[7] + scroll/8; 
        wolf.style.transform = `translateY(${wolfY}vh)`; 
        
        const pantiesY = Math.min((keyframes[5] - scroll) / 6, 31.7);   
        panties.style.transform = `translate(-50%, ${pantiesY}vh)`;  
        
        const textLeftClip = 1.06 * (keyframes[6] - scroll) / 4 + 40;  
        const textRightClip = (keyframes[6] - scroll) / 4 + 40;  
        textLeft.style.clipPath = `polygon(
            0% 0%, 
            100% 0%, 
            100% ${textLeftClip}%, 
            0% ${textLeftClip}%)`;   
        textRight.style.clipPath = `polygon(
            0% 100%, 
            100% 100%, 
            100% ${100 - textRightClip}%, 
            0% ${100 - textRightClip}%)`;    
        return
    }
    if (scroll > keyframes[8]) { 
        const wolfY = progress[8] + scroll/2; 
        wolf.style.transform = `translateY(${wolfY}vh)`; 

        const pantiesY = Math.min((keyframes[5] - scroll) / 6, 31.7);   
        panties.style.transform = `translate(-50%, ${pantiesY}vh)`;  
        return
    }
    if (scroll > keyframes[9]) {  
        const wolfY = progress[8] + scroll/2; 
        wolf.style.transform = `translateY(${wolfY}vh)`;

        const strokeY = 10 + (keyframes[8] - scroll) / 2;
        strokeOutput.style.transform = `translate(-50%, ${strokeY}vh)`;

        const textY = 0.7 * (keyframes[8] - scroll) - 100;
        textBottom.classList.add('active');
        textBottom.style.transform = `translate(-50%, ${textY}vh)`; 

        const eggClip = (keyframes[8] - scroll) - 142;
        egg.style.clipPath = `polygon(0% 0%, 100% 0%, 100% ${eggClip}%, 0% ${eggClip}%`; 
        return
    }
    if (scroll > keyframes[10]) { 
        const wolfY = progress[8] + scroll/2; 
        wolf.style.transform = `translateY(${wolfY}vh)`;

        textBottom.classList.remove('active');

        const eggClip = (keyframes[8] - scroll) - 142;
        egg.style.clipPath = `polygon(0% 0%, 100% 0%, 100% ${eggClip}%, 0% ${eggClip}%`; 
        return
    } 
    if (scroll > keyframes[11]) { 
        return
    }
    if (scroll > keyframes[12]) { 
        wolf.classList.add('hidden'); 
        return
    }
};