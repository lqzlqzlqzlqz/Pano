import {createBrowserRouter} from 'react-router-dom';
import Home from '../views/home/home';
import Index from '../views/index/index';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Index />,
        children: [
            {
                path: '/home',
                element: <Home />
            }
        ]
    }
]);
export default router;
