import * as request from '../../src/utils/request';

export const car_company = async () => {
    try {
        const res = await request.get('car_company', {});
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
