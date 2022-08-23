import { newsModal } from '../../Common/newsModal';

export const ticker = () => {
    const tickerItems = document.querySelectorAll('.ticker_scroll_item');
    const ticker = document.querySelector('.ticker_scroll');

    // clone item for continious ticker 
    tickerItems.forEach(item => ticker.insertAdjacentElement('beforeend', item.cloneNode(true)));


    const clickHandler = e => {
        e.preventDefault();
        if (e.target.classList.contains('ticker_scroll_item')) {
            const contentNumber = e.target.getAttribute('data-content');
            newsModal(contentNumber);
        }
    };

    ticker.addEventListener('click', clickHandler);
};