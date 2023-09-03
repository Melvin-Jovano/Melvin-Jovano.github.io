import indexDB from '../common/utils/db';
import config from '../config/config';

const like = {
    content: () => `
        <button class="favourite">
            Favourite
        </button>
    `,

    async postRender(restaurant) {
        const db = await indexDB;
        if (await db.get(config.OBJECT_STORE_NAME, restaurant.id)) {
            document.querySelector('.favourite').innerHTML = 'Unfavourite';
        }

        document.querySelector('.favourite').addEventListener('click', async () => {
            if (!(await db.get(config.OBJECT_STORE_NAME, restaurant.id))) {
                document.querySelector('.favourite').innerHTML = 'Unfavourite';
                await db.add(config.OBJECT_STORE_NAME, restaurant);
                console.log(123);
                return;
            }

            await db.delete(config.OBJECT_STORE_NAME, restaurant.id);
            document.querySelector('.favourite').innerHTML = 'Favourite';
        });
    },
};

export default like;
