export const dynamicHeight = () => {
    const setHeight = () => { 
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    window.addEventListener('resize', () => {
        setHeight();
    });
    // initial run
    setHeight();
};

export const dvhString = varName => {
    // return s/b used inside backticks
    return `calc(var(--vh, 1vh) * ${varName})`
}; 