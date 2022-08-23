export const gauge = (className, classInstance = '', rotation = 0) => { 
    const gauge = document.querySelector(`.${className + classInstance}`); 
    if (document.querySelector(`.${className}_long`) === null) {
        gauge.insertAdjacentHTML('afterend', `<ul class="${className + " " + className}_long"> </ul>`);
    }
    const gaugeLong = document.querySelector(`.${className}_long`);  
    gauge.insertAdjacentHTML('afterbegin', `<li class="${className + classInstance}_digits"> </li>`);
    const gaugeDigits = gauge.querySelector(`.${className + classInstance}_digits`);

    const minValue = 0;
    const maxValue = 100;
    const angle = 120;
    const height = 56;
    const width = 40;
    const ticks = 33;
    const step = (maxValue - minValue + 1) / ticks;
    const peakValues = [25, 50, 75];
    const peaksIndecies = peakValues.map(peak => Math.floor(peak * (1 / step)));  
    
    let direction; 
    Math.abs(rotation) > 90 ?
    direction = 1
    :direction = -1;
    
    const rad = degrees => degrees * Math.PI / 180 ;

    for (let i = 0; i < ticks; i++) {
        const tick = document.createElement(`li`);
        tick.classList.add('egg_video_gauge_bar');
        tick.setAttribute('value', Math.floor(step * i));
        const rotate = rotation + direction * (180  + angle/ 2 - i * (angle / (ticks - 1)));
        const x = width * Math.cos(rad(rotate)) / 2;
        const y = height * Math.sin(rad(rotate)) / 2; 
        tick.style.transform = `translate(${x}vh, ${y}vh)  rotate(${rotate}deg)`; 
        const isPeak = peaksIndecies.indexOf(i) !== -1; 
        if (isPeak) {
            tick.classList.add('egg_video_gauge_bar_peak'); 
            gaugeDigits.insertAdjacentHTML('afterbegin', `<span class="${className + classInstance}_digits_item"> ${peakValues[peaksIndecies.indexOf(i)]} </span>`); 
            gaugeLong.insertAdjacentElement('beforeend', tick); 
            continue
        }
        gauge.insertAdjacentElement('beforeend', tick); 
    } 
};