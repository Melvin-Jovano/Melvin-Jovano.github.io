import api from '../common/utils/api';
import indexDB from '../common/utils/db';
import config from '../config/config';

const favourite = {
    content: () => `
        <div class="my-15">
            <h1 class="text-center">Favourite Restaurant</h1>
            
            <center>
                <div style="max-width: 80%;" class="my-15 cards" id="cards"></div>
            </center>
        </div>
    `,

    async postRender() {
        const restaurants = await (await indexDB).getAll(config.OBJECT_STORE_NAME);

        if (restaurants.length > 0) {
            restaurants.forEach((restaurant) => {
                document.querySelector('#cards').innerHTML += `
                <div style="max-width:250px" class="card">
                    <div class="relative bordered">
                        <a class="restaurant-link" href="/#/detail/${restaurant.id}">
                            <div class="absolute card-badge bordered">
                                Lihat Detail
                            </div>
                        </a>
                        <img crossorigin="anonymous" class="lazyload w-100 img-cover" data-src="${api.getImage(restaurant.pictureId, 's')}" alt="${restaurant.name}">
                    </div>
                
                    <div class="bordered">
                        <div class="text-left my-15 h3 px-10">Rating: ${restaurant.rating}</div>
                        <div class="title text-left my-15 h2 px-10">
                        ${restaurant.name}
                        </div>
                        <div class="text-container text-left my-15 px-10">
                        ${restaurant.description}
                        </div>
                    </div>
                </div>
            `;
            });
            return;
        }
        document.querySelector('#cards').innerHTML = '<h2>~ Tidak ada daftar ~</h2>';
    },
};

export default favourite;
