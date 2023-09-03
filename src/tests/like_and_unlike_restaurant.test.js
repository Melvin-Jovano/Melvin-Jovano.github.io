import indexDB from "../common/utils/db";
import like from "../component/like";
import config from "../config/config";

/* eslint-disable no-undef */
describe('Integration test', () => {

    function setup() {
      document.body.innerHTML = '<div id="test-like"></div>';
    }
    
    beforeEach(() => {
      setup();
    });
    
    it('Kondisi belum dilike', async () => {
        document.querySelector('#test-like').innerHTML = like.content();
        await like.postRender({id: 'testId'});
        const innerHTMLOfButton = document.querySelector('.favourite').innerHTML.trim();
        expect(innerHTMLOfButton).toBe('Favourite');
    });
    
    it('Kondisi sesudah dilike', async () => {
        document.querySelector('#test-like').innerHTML = like.content();
        await like.postRender({id: 'testId'});

        document.querySelector('.favourite').click();
        await new Promise((r) => setTimeout(r, 1000));

        const db = await indexDB;
        const restaurant = await db.get(config.OBJECT_STORE_NAME, 'testId');

        expect(restaurant).toEqual({ id: 'testId' });

        await db.delete(config.OBJECT_STORE_NAME, 'testId');
    });

    it('Kondisi batal dilike', async () => {
      document.querySelector('#test-like').innerHTML = like.content();
      await like.postRender({id: 'testId'});

      document.querySelector('.favourite').click();
      await new Promise((r) => setTimeout(r, 1000));
      
      document.querySelector('.favourite').click();
      await new Promise((r) => setTimeout(r, 1000));

      const db = await indexDB;
      const restaurant = await db.getAll(config.OBJECT_STORE_NAME);

      expect(restaurant).toEqual([]);
    });
});
