import lozad from 'lozad';

export const lazyLoadInit = () => {
    // fetch 2 screens ahead
    const offset = Math.round(window.innerHeight * 2);

    const lazyObserver = lozad('.lazy', {
        rootMargin: `${offset}px 0px`,
        enableAutoReload: true 
    });

    lazyObserver.observe();
};