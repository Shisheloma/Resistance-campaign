export const popper = position => {   
    const container = document.querySelector('.popper');
    const image = document.querySelector('.popper_image');
    const text = document.querySelectorAll('.popper_text');
    const copied = document.querySelector('.popper_text_copied'); 
    let vertical = false;
    let copiedTimer = null;
    
    if (image.classList.contains('active') || position.split(' ').length !== 2) {
        return
    }

    const pos = position.split(' '); 

    switch (pos[0]) {
        case 'left':
            container.style.left = '0';
            container.style.right = 'auto';
            container.style.bottom = 'auto';
            container.style.transform = 'translate(-50%) rotate(90deg)'; 
            text.forEach(text => {
                text.style.left = '80%'; 
                text.style.right = 'auto'; 
                text.style.transform = 'translate(-50%)';
            });
            vertical = true;
            break;
        case 'right':
            container.style.left = 'auto';
            container.style.right = '0';
            container.style.bottom = 'auto';
            container.style.transform = 'translate(50%) rotate(-90deg) scaleX(-1)'; 
            text.forEach(text => {
                text.style.left = 'auto'; 
                text.style.right = '20%'; 
                text.style.transform = 'translate(50%) scaleX(-1)';
            });
            vertical = true;
            break; 
        case 'bottom':
            container.style.left = 'auto';
            container.style.right = 'auto';
            container.style.bottom = '0'; 
            container.style.transform = 'none';                        
            break; 
        default:
            return
    }

    switch (pos[1]) {
        case 'top':
            container.style.top = '-30vh';
            container.style.bottom = 'auto';  
            break;
        case 'bottom':            
            container.style.top = 'auto'; 
            container.style.bottom = '24vh';  
            break; 
        case 'right':
            container.style.top = 'auto';  
            container.style.right = 'min(30vh, 20vw)';
            container.style.transform = 'scaleX(-1)';
            text.forEach(text => {
                text.style.left = 'auto'; 
                text.style.right = '20%'; 
                text.style.transform = 'translate(50%) scaleX(-1)';
            });
            break;             
        default:
            return
    } 
    
    image.classList.add('active');
    text.forEach(text => {
        text.classList.add('active');
        if (vertical) {
            text.classList.add('vertical');
        }
    });

    const animationEndHandler = e => {
        if (e.target === image) {
            image.classList.remove('active');
            text.forEach(text => {
                text.classList.remove('active');
                text.classList.remove('vertical');
            });
            
            image.removeEventListener("webkitAnimationEnd", animationEndHandler);
            image.removeEventListener("animationend", animationEndHandler);
        }
    };

    const copyText = () => {
        navigator.clipboard.writeText('shisheloma@gmail.com'); 
        copied.classList.add('show'); 
        clearTimeout(copiedTimer);
        copiedTimer = setTimeout(() => {
            copied.classList.remove('show'); 
        }, 1500);
    };

    image.addEventListener("webkitAnimationEnd", animationEndHandler);
    image.addEventListener("animationend", animationEndHandler);

    container.addEventListener('click', copyText);
};