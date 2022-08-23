import { precacheAndRoute } from 'workbox-precaching';
import {registerRoute} from 'workbox-routing';
import {StaleWhileRevalidate} from 'workbox-strategies'; 
import {imageCache, staticResourceCache} from 'workbox-recipes';
import {} from 'workbox-recipes';

staticResourceCache();
self.skipWaiting();

precacheAndRoute(self.__WB_MANIFEST);

// cdnfonts "Stale while revalidate" cache strategy
const sheetCacheName = 'cdnfonts-webfonts';

registerRoute(
    ({url}) => url.origin === 'https://fonts.cdnfonts.com',
    new StaleWhileRevalidate({
        cacheName: sheetCacheName,
    })
);

// images "Cache first" reciped cache strategy
imageCache(); 
 
// CSS, JS, "Stale while revalidate" reciped cache strategy
staticResourceCache();
