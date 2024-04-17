import {createHashRouter} from 'react-router-dom';
import Home from '../views/home/home';
import Index from '../views/index/index';
import Test from '../views/test/test';

const router = createHashRouter([
    {
        path: '/',
        element: <Index />,
        children: [
            {
                path: '/home',
                element: <Home />
            }
        ],
    },
    {
        path: '/test',
        element: <Test />
    }
]);
export default router;
