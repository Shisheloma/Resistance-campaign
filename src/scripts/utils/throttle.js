export const throttle = (cb, timeout = 200) => {
    let waiting = false;
    let waitingArguments = null;
  
    const fireTimer = () => {
        if (waitingArguments == null) {
            waiting = false;
        } else {
            cb(...waitingArguments);
            waitingArguments = null;
            setTimeout(fireTimer, timeout);
        }
    };
    
    return (...args) => { 
        if (waiting) {
            waitingArguments = args;
            return
        }
        cb(...args);
        waiting = true;
        setTimeout(fireTimer, timeout);
    }
};