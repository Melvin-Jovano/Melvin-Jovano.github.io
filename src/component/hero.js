const hero = {
    content: () => `
        <section>
            <picture>
                <source media="(max-width: 600px)" srcset="./images/heros/hero-image_4-small.jpg">
                <img src="./images/heros/hero-image_4-large.jpg" class="d-block hero img-cover " alt="hero image">
            </picture>
        </section>
    `,

    postRender() {

    },
};

export default hero;
