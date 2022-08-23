import { throttleFrame } from '../../utils/throttleFrame'; 

export const fingermanSection = () => {  
    const section = document.querySelector('.fingerman-section');
    const puller = document.querySelector('.puller');
    const pullerFrames = section.querySelectorAll('.puller_item'); 
    const fingermanFrames = section.querySelectorAll('.fingerman_item'); 
    const bubble = section.querySelector('.fingerman_text'); 
    let timer;
     
    const closeHandler = e => {
        e.preventDefault();    
        pullerFrames.forEach( frame => {   
            frame.classList.add("close"); 
        }); 
        const x = e.clientX / window.innerHeight;
        const y = (e.clientY - section.getBoundingClientRect().top) / window.innerHeight;  
        if ( x > 0.34 && x < 0.4 && y > 0.58 && y < 0.64) {
            bubble.innerText = '=3'; 
            puller.classList.add('faded');
            fingermanFrames.forEach(frame => frame.classList.add('active'));
            clearTimeout(timer);
            setTimeout(() =>  window.scrollTo({ top: 0, behavior: 'smooth' }), 1800);  
            setTimeout(() => {                
                bubble.innerHTML = 'hey! <br> pull my finger';  
                puller.classList.remove('faded');
                fingermanFrames.forEach(frame => frame.classList.remove('active'));
            }, 2500);
            return
        }
        if ( x > 0.25 && x < 0.275 && y > 0.02 && y < 0.05) { 
            bubble.innerHTML = `<br> don't you touch me here!`;
            clearTimeout(timer);
            timer = setTimeout(() => {
                bubble.innerHTML = '<br> pull my finger';  
            }, 3500);
            return
        }
        if ( x > 0.335 && x < 0.35 && y > 0.398 && y < 0.42) { 
            bubble.innerHTML = '<br> stop it!';
            clearTimeout(timer);
            timer = setTimeout(() => {
                bubble.innerHTML = '<br> pull my finger';  
            }, 3500);
            return
        } 
    };

    const openHandler = () => {
        pullerFrames.forEach( frame => {  
            frame.classList.remove("close");
        }); 
    }; 

    const cursorHandler = e => {   
        const x = e.clientX;
        let y = e.clientY - section.getBoundingClientRect().top; 
        // if (y / window.innerHeight < 0.04) {
        //     y = window.innerHeight / 5;
        // }
        puller.style.transform = `translate(${x}px, ${y}px) rotate(7deg)`;
    }; 

    const throttledCursorHandler = throttleFrame(cursorHandler);

    section.addEventListener('pointerdown', closeHandler);
    section.addEventListener('pointerdown', throttledCursorHandler);
    section.addEventListener('pointerup', openHandler); 
    section.addEventListener('pointermove', throttledCursorHandler); 
};