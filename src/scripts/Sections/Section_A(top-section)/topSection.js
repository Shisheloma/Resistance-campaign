import { splideInit } from './splideInit';
import { ticker } from './ticker';
import { navHandler } from './navHandler';

export const topSection = () => {
    splideInit();
    navHandler();
    ticker();
};