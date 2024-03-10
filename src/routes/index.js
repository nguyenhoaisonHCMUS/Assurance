import config from '../config';

import Home from '../pages/Home';
import McareYou from '../pages/McareYou';
import OtoBM from '../pages/OtoBM';
import BhNhantho from '../pages/BhNhantho';
import HeaderOnly from '../layouts/HeaderOnly';
import CarInsured from '../pages/CarInsured/CarInsured';

const publicRoute = [
    { path: config.routes.home, component: Home },
    { path: config.routes.mcareyou, component: McareYou },
    { path: config.routes.otobm, component: OtoBM },
    { path: config.routes.bhnhantho, component: BhNhantho },
    { path: config.routes.carinsured, component: CarInsured, layout: HeaderOnly },
    // { path: config.routes.explore, component: Explore },
    // { path: config.routes.live, component: Live },
];

const privateRoute = {};

export { privateRoute, publicRoute };
