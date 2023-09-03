import api from '../common/utils/api';

const home = {
    content: () => `
        <div class="my-15">
            <h1 class="text-center">Explore Restaurant</h1>
            
            <center>
                <div style="max-width: 80%;" class="my-15 cards" id="cards"></div>
            </center>
        </div>
    `,

    async postRender() {
        (await api.getAll()).forEach((restaurant) => {
            document.querySelector('#cards').innerHTML += `
            <div style="max-width:250px" class="card">
                <div class="relative bordered">
                    <a class="restaurant-link" href="/#/detail/${restaurant.id}">
                        <div class="absolute card-badge bordered">
                            Lihat Detail
                        </div>
                    </a>
                    <img loading="lazy" crossorigin="anonymous" class="w-100 img-cover lazyload" data-src="${api.getImage(restaurant.pictureId, 's')}" alt="${restaurant.name}">
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
    },
};

export default home;
