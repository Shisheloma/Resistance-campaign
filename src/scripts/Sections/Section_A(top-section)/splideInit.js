import Splide from '@splidejs/splide'; 

import { throttle } from '../../utils/throttle'; 

export const splideInit = () => {
    const zeroSlideMainTemplate = document.querySelector('#zero_slide_main');
    const zeroSlideMain = zeroSlideMainTemplate.content.querySelector('.zero_slide_main');
    const zeroSlideTextTemplate = document.querySelector('#zero_slide_text');
    const zeroSlideText = zeroSlideTextTemplate.content.querySelector('.zero_slide_text');

    const mainSlider = new Splide( '.right' ); 
    const textSlider = new Splide( '.left_message_subtitle_slider', {
        arrows: false,
        pagination: false,
        drag: false, 
        direction: 'ttb',
        height: 'calc(var(--vh, 1vh) * 80)',  
        lazyLoad: 'sequential',
    });
      
    mainSlider.sync(textSlider);
    mainSlider.mount(); 
    textSlider.mount();  

    const swapSlide = () => {  
        if (window.matchMedia("screen and (max-aspect-ratio: 5/3)").matches) {
            if (mainSlider.length <= 3) {
                mainSlider.add(zeroSlideMain, 0); 
                textSlider.add(zeroSlideText, 0); 
            }
        } else {
            mainSlider.remove('.zero_slide_main'); 
            textSlider.remove('.zero_slide_text'); 
        }
    };

    const throttledSwapSlide = throttle(swapSlide, 200);

    window.addEventListener('resize', throttledSwapSlide);
    // initial run
    swapSlide();
};