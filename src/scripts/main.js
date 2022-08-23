import '../styles/main.scss'; 

import { lazyLoadInit } from './Common/lazyLoadInit';
import { autoscroll } from './Common/autoscroll';  
import { navModal } from './Common/navModal/navModal';
import { topSection } from './Sections/Section_A(top-section)/topSection'; 
import { missionSection } from './Sections/Section_B(mission-section)/missionSection'; 
import { proceedingSection } from './Sections/Section_C(proceeding-section)/proceedingSection'; 
import { evilSection } from './Sections/Section_D(evil-section)/evilSection'; 
import { wolfSection } from './Sections/Section_E(wolf-section)/wolfSection'; 
import { eggSection } from './Sections/Section_F(egg-section)/eggSection'; 
import { sponsorsSection } from './Sections/Section_G(sponsors-section)/sponsorsSection'; 
import { fingermanSection } from './Sections/Section_H(fingerman-section)/fingermanSection';  
import { serviceWorkerRegister } from '../serviceWorkerRegister';

document.addEventListener( 'DOMContentLoaded', function () { 
    lazyLoadInit();
    autoscroll();
    navModal();  
    topSection();
    missionSection();
    proceedingSection();
    evilSection();
    wolfSection();
    eggSection();
    sponsorsSection();
    fingermanSection();
    serviceWorkerRegister();
}); 