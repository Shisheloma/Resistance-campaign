import { navModalHoldEsc } from './navModal/navModal'; 
import { navModalResumeEsc } from './navModal/navModal';   
import { fluidText } from '../utils/fluidText'; 

export const newsModal = contentNumber => {
    const container = document.querySelector('.news_modal');
    const overlay = document.querySelector('.news_modal_overlay');
    const contentDoubleDigit = ('0' + contentNumber).slice(-2);
    const content = document.querySelector(`#news_modal_content_${contentDoubleDigit}`)?.content;
    
    if (content) {
        container.replaceChildren(overlay, content.cloneNode(true));    
        const text = container.querySelector('.news_modal_window_body_text');
        fluidText(text, 12, 30, 0.63); 
        document.body.style.overflowY = 'hidden';
        // add delay to apply transition styles to inserted nodes
        setTimeout(() => {
            container.classList.add('active');
        }, 0); 
        navModalHoldEsc();
    }

    const closeModalHandler = e => { 
        if (
            e.target.classList.contains('news_modal_overlay') || 
            e.target.classList.contains('news_modal_window_close') ||  
            e.key === "Escape"
        ) {
            document.body.style.overflowY = 'auto';
            container.classList.remove('active'); 
            container.removeEventListener('click', closeModalHandler);
            document.removeEventListener('keydown', closeModalHandler);
            navModalResumeEsc();
        }
    };

    container.addEventListener('click', closeModalHandler);
    document.addEventListener('keydown', closeModalHandler); 
};
