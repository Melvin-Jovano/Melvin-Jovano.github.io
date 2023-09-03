import home from '../component/home';
import hero from '../component/hero';
import detail from '../component/detail';
import favourite from '../component/favourite';

const route = {
    '/': [hero, home],
    '/detail/:id': [detail],
    '/favourite': [favourite],
};

export default route;
