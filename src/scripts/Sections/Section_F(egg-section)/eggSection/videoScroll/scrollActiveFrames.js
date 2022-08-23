import { keyframes } from "./keyframes";
import { egg, escapeEgg, escapeSponsors, play, playTaskbar, video, videoElement } from "./nodes";

export const scrollActiveFrames = (scroll, direction) => {
    const scaleMin = 0.96;

    if (scroll > keyframes[0]) {  
        // width-height instead of scale used because of crhome scale - border-radius glitch
        video.style.height = `${60 * scaleMin}vh`; 
        video.style.width = `${44 * scaleMin}vh`;  
        videoElement.style.transform = `translate(-50%, -50%) scale(${scaleMin - 0.1})`;
        return
    }
    if (scroll > keyframes[1]) {   
        const scale = (keyframes[0] - scroll) / 2000; 
        
        // width-height instead of scale being used because of crhome scale/border-radius glitch
        const scaleVid = Math.max( Math.min(scaleMin + scale, 1), scaleMin); 
        video.style.height = `${60 * scaleVid}vh`; 
        video.style.width = `${44 * scaleVid}vh`;  
        
        const scaleElement = Math.max( Math.min(scaleMin + 2.5 * scale - 0.1, 1), scaleMin - 0.1); 
        videoElement.style.transform = `translate(-50%, -50%) scale(${scaleElement})`; 
        
        if (
            scroll > keyframes[1] + 100 &&  
            !videoElement.classList.contains('playing') &&
            direction === 'down' 
        ) {
            videoElement.classList.add('playing');
            play.classList.add('playing');
            playTaskbar.classList.add('playing');
            video.classList.remove('ended');
            videoElement.classList.remove('ended');
            play.classList.remove('ended'); 
            playTaskbar.classList.remove('ended'); 
            videoElement.play();
        } 
        return
    }
    if (scroll > keyframes[2]) {  
        escapeEgg.classList.remove(`hidden`);  
        return
    }
    if (scroll > keyframes[3]) {      
        return
    }
    if (scroll > keyframes[4]) {   
        egg.style.transform = `translateY(75vh)`;  
        escapeSponsors.style.top = `-6vh`;
    return
    }  
};