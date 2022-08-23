export const scrolledRatio = (container, speed = 100, overShoot = 0) => {
    const containerY = container.getBoundingClientRect().top;
    const scrollRatio = (containerY - window.innerHeight) / window.innerHeight + (1 + overShoot);  
    return scrollRatio * speed;   
};