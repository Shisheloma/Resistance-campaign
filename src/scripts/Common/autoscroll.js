export const autoscroll = () => {
    const taskbar = document.querySelector('.taskbar_container');
    const play = document.querySelector('.taskbar_button_play'); 
    const top = document.querySelector('.taskbar_button_top');  
    const vidCenter = document.querySelector('.taskbar_button_video_center');   
    const video = document.querySelector('.egg-section');   
    const playSectionA = document.querySelector('.autoscroll_play');  
    const speedSelectors = document.querySelectorAll('.taskbar_speed');  
    const sponsors = document.querySelector('.sponsors-section');  
    let scrolling = false; 
    let speed = 1; 

    const clickHander = e => {
        if (e.target === play || e.target === playSectionA) {
            play.classList.toggle('scrolling');
            playSectionA.classList.toggle('scrolling');
            scrolling = !scrolling; 
            scroll();
            if (scrolling) {
                // document.body.style.scrollBehavior = "auto"; 
            } 
        }
        if (e.target === playSectionA) {
            taskbar.classList.add('flick');
            setTimeout(() => taskbar.classList.remove('flick'), 2000);
        }
        if (e.target.classList.contains('taskbar_speed')) {
            speedSelectors.forEach(item => item.classList.remove('active'));
            e.target.classList.add('active');
            speed = parseFloat(e.target.getAttribute('value')); 
        }
        if (e.target === top) {
            stopScroll();
            if (document.scrollingElement.scrollTop === 0) {
                top.classList.add('fail');
                setTimeout(() => top.classList.remove('fail'), 600);
                return  
            }
            window.scrollTo({ top: 0, behavior: 'smooth' }); 
            setTimeout(() =>  window.scrollTo({ top: 0, behavior: 'smooth' }), 500); 
            top.classList.add('flip');
            setTimeout(() => top.classList.remove('flip'), 2500);
        }
        
        if (e.target === vidCenter) { 
            stopScroll();
            video.scrollIntoView({block: "center", behavior: 'smooth'});  
            setTimeout(() => video.scrollIntoView({block: "center", behavior: 'smooth'}), 500); 
            return
        }
    };

    const scroll = () => {
        const initialPosition = document.scrollingElement.scrollTop;
        const endPosition = sponsors.offsetTop - 0.2 * window.innerHeight;
        const distance = endPosition - initialPosition;
        const duration = 50000 * distance / endPosition;
        let scrollY = initialPosition;
        let prevTimestamp = null;
        const step = currentTimestamp => {   
            if (document.scrollingElement.scrollTop >= endPosition && 
                prevTimestamp === null) {
                stopScroll();
                play.classList.add('fail');
                setTimeout(() => play.classList.remove('fail'), 600);
                return
            }
            if (document.scrollingElement.scrollTop >= endPosition ||
                !scrolling) {
                stopScroll();
                return
            }
            if (prevTimestamp === null) {
                prevTimestamp = currentTimestamp;
            }
            scrollY += distance * (currentTimestamp - prevTimestamp) / duration * speed; 
            document.scrollingElement.scrollTop = scrollY; 
            prevTimestamp = currentTimestamp;
            window.requestAnimationFrame(step);
        };
        
        window.requestAnimationFrame(step);
    };

    const stopScroll = () => { 
        play.classList.remove('scrolling');
        playSectionA.classList.remove('scrolling');
        scrolling = false; 
        // document.body.style.scrollBehavior = "smooth";  
    }; 

    taskbar.addEventListener('click', clickHander);
    playSectionA.addEventListener('click', clickHander);
    document.addEventListener('wheel', stopScroll); 
    document.addEventListener("touchmove", stopScroll); 
};