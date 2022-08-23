import { gauge } from './player/gauge';  

export const player = () => {   
    const container = document.querySelector('.egg_video');  
    const video = document.querySelector('.egg_video_element');  
    const play = document.querySelector('.egg_video_play');  
    const scroll = document.querySelector('.egg_video_scroll');  
    const volume = document.querySelector('.egg_video_volume');   
    const mute = document.querySelector('.egg_video_mute');   
    const taskbar = document.querySelector('.taskbar_container'); 
    const playTaskbar = document.querySelector('.taskbar_button_video_play');   
    const muteTaskbar = document.querySelector('.taskbar_button_video_mute');   
    const gaugeLeft = document.querySelector('.egg_video_gauge_left');   
    const gaugeRight = document.querySelector('.egg_video_gauge_right');   

    const clickHandler = e => { 
        if (e.target.classList.contains('egg_video_play') ||
            e.target === playTaskbar) {
            playPause();
            return
        }
        if (e.target.classList.contains('egg_video_mute') ||
            e.target === muteTaskbar) { 
            muteUnmute();
            return
        }
    };

    const hoverHandler = e => {
        if (e.target.classList.contains('egg_video_scroll')) {
            e.target.labels[0].textContent = curTime();  
        }
        if (e.target.classList.contains('egg_video_volume')) {
            e.target.labels[0].textContent = `${volume.value}%`; 
        } 
    };

    const curTime = () => {
        let min = '0' + Math.floor(video.currentTime / 60);
        let sec = '0' + Math.floor(video.currentTime % 60);
        min = min.slice(-2);  
        sec = sec.slice(-2);  
        return `${min}:${sec}`
    };

    const playPause = () => {
        if (video.classList.contains('ended')) { 
            container.classList.remove('ended');
            video.classList.remove('ended');
            play.classList.remove('ended'); 
            playTaskbar.classList.remove('ended'); 
            video.classList.add('playing');
            play.classList.add('playing'); 
            playTaskbar.classList.add('playing'); 
            video.currentTime = 0;
            video.play();
            return
        }
        if (video.classList.contains('playing')) {
            video.pause();
            video.classList.remove('playing');
            play.classList.remove('playing');
            playTaskbar.classList.remove('playing'); 
            return
        }
        video.play();
        video.classList.add('playing');
        play.classList.add('playing');
        playTaskbar.classList.add('playing'); 
        return  
    };

    const muteUnmute = () => {
        if (video.classList.contains('muted')) {
            video.volume = volume.value / 100;
            video.classList.remove('muted');
            mute.classList.remove('muted');  
            muteTaskbar.classList.remove('muted');  
            return
        }
        video.volume = 0;
        video.classList.add('muted');
        mute.classList.add('muted');  
        muteTaskbar.classList.add('muted');  
        return
    }; 
    
    const setScroll = () => { 
        scroll.value = 100 * video.currentTime / video.duration; 
        scroll.labels[0].textContent = curTime();   
        gaugeProgress(gaugeLeft, scroll); 
    };

    const scrollHandler = e => { 
        video.currentTime = video.duration * e.target.value / 100; 
        scroll.labels[0].textContent = curTime();  
        container.classList.remove('ended');
        video.classList.remove('ended');
        play.classList.remove('ended');
        playTaskbar.classList.remove('ended'); 
        gaugeProgress(gaugeLeft, scroll); 
    };
    
    const volumeHandler = e => {
        const vol = e.target.value / 100;
        video.volume = vol;
        video.classList.remove('muted');  
        mute.classList.remove('muted'); 
        muteTaskbar.classList.remove('muted');   
        volume.labels[0].textContent = `${e.target.value}%`; 
        gaugeProgress(gaugeRight, volume);
    };
    
    const endHandler = ()    => {
        video.classList.remove('playing');
        play.classList.remove('playing');
        playTaskbar.classList.remove('playing'); 
        container.classList.add('ended'); 
        video.classList.add('ended');
        play.classList.add('ended');
        playTaskbar.classList.add('ended'); 
    };
    
    const gaugeProgress = (gauge, input) => {  
        const children = [...gauge.children];
        children.forEach(child => {
            if (child.classList.contains('egg_video_gauge_bar')) {
                if (parseInt(child.getAttribute('value')) < input.value) {
                    child.classList.add('active');
                    return
                }
                child.classList.remove('active');
            }
        });
    };
    
    const setup = () => {   
        scroll.value = 0;
        volume.value = 25;
        video.volume = 0;
        video.classList.add('muted'); 
        mute.classList.add('muted');
        muteTaskbar.classList.add('muted');  
        gaugeProgress(gaugeRight, volume);  
    };

    gauge('egg_video_gauge', '_left');
    gauge('egg_video_gauge', '_right', 180);

    video.addEventListener("timeupdate", setScroll); 
    video.addEventListener("ended", endHandler);
    container.addEventListener('click', clickHandler); 
    taskbar.addEventListener('click', clickHandler); 
    container.addEventListener('mouseover', hoverHandler); 
    scroll.addEventListener('input', scrollHandler);
    volume.addEventListener('input', volumeHandler);
    setup(); 

    
};