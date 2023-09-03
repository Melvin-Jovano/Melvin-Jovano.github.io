const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
    I.amOnPage('/');
});

Scenario('Show no liked restaurant', ({ I }) => {
    I.amOnPage('/#/favourite');
    I.see('~ Tidak ada daftar ~', 'h2');
});

Scenario('Like a restaurant', async ({ I }) => {
    I.amOnPage('/');
    I.seeElement('.restaurant-link');
    I.click(locate('.restaurant-link').first());

    I.seeElement('#detail-name');
    const title = await I.grabTextFrom(locate('#detail-name').first());
    
    I.seeElement('#detail-favourite');
    I.seeElement('.favourite');
    I.click(locate('.favourite').first());

    I.amOnPage('/#/favourite');
    I.seeElement('.card');
    const likedTitle = await I.grabTextFrom(locate('.title').first());

    assert.strictEqual(title, likedTitle.trim());
});

Scenario('Unlike the restaurant', async ({ I }) => {
    I.amOnPage('/');
    I.seeElement('.restaurant-link');
    I.click(locate('.restaurant-link').first());

    I.seeElement('#detail-name');
    const title = await I.grabTextFrom(locate('#detail-name').first());
    
    I.seeElement('#detail-favourite');
    I.seeElement('.favourite');
    I.click(locate('.favourite').first());

    I.amOnPage('/#/favourite');
    I.seeElement('.card');
    const likedTitle = await I.grabTextFrom(locate('.title').first());

    assert.strictEqual(title, likedTitle.trim());

    I.amOnPage('/#/favourite');
    I.seeElement('.card');

    I.seeElement('.restaurant-link');
    I.click(locate('.restaurant-link').first());

    I.seeElement('#detail-favourite');
    I.seeElement('.favourite');
    I.click(locate('.favourite').first());

    I.amOnPage('/#/favourite');
    I.see('~ Tidak ada daftar ~', 'h2');
});