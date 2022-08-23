import { keyframes } from "./keyframes"; 
import { evil, evilContainer, panties, strokeInput, strokeInputLine, strokeOutput, textBottom, textLeft, textRight, wolf } from "./nodes";

export const scrollResets = scroll => {
    wolf.classList.remove('hidden');
    if (scroll > keyframes[0] + 50) {  
        wolf.style.transform = `translateY(-9vh)`;   
    }
    if (scroll > keyframes[1] || scroll < keyframes[10]) { 
        strokeInput.classList.remove('active');  
        strokeInputLine.setAttribute('y1', '100'); 
    } else {
        strokeInput.classList.add('active');  
        strokeInputLine.setAttribute('y1', '-20'); 
    }
    
    if (scroll > keyframes[3] - 20) { 
        evil.classList.add('hide-horn');   
    } else { 
        evil.classList.remove('hide-horn');  
    }

    if (scroll > keyframes[4] - 25) { 
        evilContainer.style.zIndex  = 0;   
    } else { 
        evilContainer.style.zIndex  = 1;  
    }

    if (scroll > keyframes[7]) {
        panties.style.transform = `translate(-50%, 0)`; 
        textLeft.style.clipPath = `polygon(0 0, 100% 0, 100% 0, 0 0)`;   
        textRight.style.clipPath = `polygon(0 0, 100% 0, 100% 0, 0 0)`;   
    }   

    if (scroll > keyframes[8]) { 
        strokeOutput.classList.remove('active'); 
        textBottom.style.transform = `translate(-50%, 0vh)`;  
    } else { 
        strokeOutput.classList.add('active');
    } 

    if (scroll < keyframes[7]) { 
        strokeOutput.classList.remove('hidden');
    }

    if (scroll < keyframes[8]) {
        panties.style.transform = `translate(-50%, 31.7vh)`; 
    }
};