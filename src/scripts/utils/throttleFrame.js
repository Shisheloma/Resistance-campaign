export const throttleFrame = (cb) => {
    let waiting = false;
    let waitingArguments = null;
  
    const fireFrame = () => {
        if (waitingArguments == null) {
            waiting = false;
        } else {
            cb(...waitingArguments);
            waitingArguments = null;
            requestAnimationFrame(fireFrame);
        }
    };
    
    return (...args) => { 
        if (waiting) {
            waitingArguments = args;
            return
        }
        cb(...args);
        waiting = true;
        requestAnimationFrame(fireFrame);
    }
};