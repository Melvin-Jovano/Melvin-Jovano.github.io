import api from '../common/utils/api';
import UrlParser from '../routes/url-parser';
import like from './like';

const detail = {
    content: () => `
    <center class="mt-20">
        <h1 class="mb-10">~ <span id="detail-name">Loading...</span> ~ </h1>
            <div id="detail-favourite"></div>
        <div style="max-width: 60%;" class="my-15 cards">
        <div style="max-width:350px" class="card">
            <img crossorigin="anonymous" class="w-100" id="detail-img" src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="">
        </div>
        <div style="max-width:350px" class="card text-start">
            <div class="fw-bold">Alamat:</div>
            <div class="mb-10" id="detail-address">Loading...</div>

            <div class="fw-bold">Kota:</div>
            <div class="mb-10" id="detail-city">Medan</div>

            <div class="fw-bold">Deskripsi:</div>
            <div class="mb-10" id="detail-desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ...</div>

            <div class="fw-bold">Makanan:</div>
            <div class="mb-10">
            <ul id="detail-food"></ul>
            </div>

            <div class="fw-bold">Minuman:</div>
            <div class="mb-10">
            <ul id="detail-drink"></ul>
            </div>
        </div>
        <div class="card text-start">
            <h2 class="text-center">Review</h2>
            <div id="detail-review"></div>
        </div>
        </div>
    </center>
    `,

    async postRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await api.getDetail(url.id);

        document.querySelector('#detail-favourite').innerHTML = like.content();
        like.postRender(restaurant);

        document.querySelector('#detail-name').innerHTML = restaurant.name;
        document.querySelector('#detail-img').setAttribute('src', api.getImage(restaurant.pictureId));
        document.querySelector('#detail-address').innerHTML = restaurant.address;
        document.querySelector('#detail-city').innerHTML = restaurant.city;
        document.querySelector('#detail-desc').innerHTML = restaurant.description;

        restaurant.menus.foods.forEach((food) => {
            document.querySelector('#detail-food').innerHTML += `<li>${food.name}</li>`;
        });

        restaurant.menus.drinks.forEach((drink) => {
            document.querySelector('#detail-drink').innerHTML += `<li>${drink.name}</li>`;
        });

        restaurant.customerReviews.forEach((review) => {
            document.querySelector('#detail-review').innerHTML += `
            <div class="mb-20">
                <div class="fw-bold mb-5">${review.name}</div>
                <div class="mb-10">${review.review}</div>
                <div class="fs-12">${review.date}</div>
            </div>

            <hr>
            `;
        });
    },
};

export default detail;
