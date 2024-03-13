import * as request from '../../src/utils/request';

export const program = async () => {
    try {
        const res = await request.get('programs', {});
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
