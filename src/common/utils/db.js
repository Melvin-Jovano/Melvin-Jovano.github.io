import { openDB } from 'idb';
import config from '../../config/config';

const indexDB = openDB(config.DATABASE_NAME, config.DATABASE_VERSION, {
    upgrade(database) {
        database.createObjectStore(config.OBJECT_STORE_NAME, { keyPath: 'id' });
    },
});

export default indexDB;
