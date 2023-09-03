import axios from 'axios';
import config from '../../config/config';

const api = {
    getAll: async () => (await axios(`${config.API_URL()}/list`)).data.restaurants,

    getDetail: async (id) => (await axios(`${config.API_URL()}/detail/${id}`)).data.restaurant,

    getImage(pictureId, size = 's') {
        let imageSize = 'small';

        if (size === 'm') {
            imageSize = 'medium';
        } else if (size === 'l') {
            imageSize = 'large';
        }

        return `${config.API_URL()}/images/${imageSize}/${pictureId}`;
    },
};

export default api;
