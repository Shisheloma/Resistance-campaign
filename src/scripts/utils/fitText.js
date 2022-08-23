/*!	
* FitText.js 1.0 jQuery free version
*
* Copyright 2011, Dave Rupert http://daverupert.com 
* Released under the WTFPL license 
* http://sam.zoy.org/wtfpl/
* Modified by Slawomir Kolodziej http://slawekk.info
*
* Date: Tue Aug 09 2011 10:45:54 GMT+0200 (CEST)
*/ 

const addEvent = function (el, type, fn) {
    if (el.addEventListener) {
        el.addEventListener(type, fn, false); 
    } else {
        el.attachEvent('on'+type, fn);
    }
};

export const fitText = (el, compressor = 1) => { 

    const fit = (el) => {  
        const resizer = () => {
            el.style.fontSize = Math.max(Math.min(el.clientWidth / (compressor*40), 40), 12) + 'px';  
        };

        // Call once to set.
        resizer();

        // Bind events
        // If you have any js library which support Events, replace this part
        // and remove addEvent function (or use original jQuery version)
        addEvent(window, 'resize', resizer);
        addEvent(window, 'orientationchange', resizer);
    };

    if (el.length) { 
        for(let i = 0; i < el.length; i++)
        fit(el[i]);
    } else {
        fit(el);
    }

    // return set of elements
    return el;
};  