 import { Workbox } from 'workbox-window';

 export const serviceWorkerRegister = () => {

    if (process.env.NODE_ENV === "development") {
        console.log('Service worker registration cancelled for development');
        return
    }

    if ( 'serviceWorker' in navigator ) {
        const wb = new Workbox('sw.js');
 
        wb.register();
    }
 };