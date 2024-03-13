import config from '../config';

import Home from '../pages/Home';
import McareYou from '../pages/McareYou';
import OtoBM from '../pages/OtoBM';
import BhNhantho from '../pages/BhNhantho';
import HeaderOnly from '../layouts/HeaderOnly';
import CarInsured from '../pages/CarInsured/CarInsured';
import Login from '../pages/Login';
import InsuranceDetail from '../pages/InsuranceDetail/InsuranceDetail';

const publicRoute = [
    { path: config.routes.home, component: Home },
    { path: config.routes.mcareyou, component: McareYou },
    { path: config.routes.otobm, component: OtoBM },
    { path: config.routes.bhnhantho, component: BhNhantho },
    { path: config.routes.carinsured, component: CarInsured, layout: HeaderOnly },
    { path: config.routes.login, component: Login, layout: HeaderOnly },
    { path: config.routes.insurancedetail, component: InsuranceDetail, layout: HeaderOnly },
];

const privateRoute = {};

export { privateRoute, publicRoute };
