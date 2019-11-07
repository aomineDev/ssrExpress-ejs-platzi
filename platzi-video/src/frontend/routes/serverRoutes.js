import Home from '../pages/Home';
import Login from '../pages/Login';
import Signin from '../pages/Signin';
import Player from '../pages/Player';
import NotFound from '../pages/NotFound';

const serverRoutes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/login',
    component: Login,
    exact: true,
  },
  {
    path: '/signin',
    component: Signin,
    exact: true,
  },
  {
    path: '/player/:id',
    component: Player,
    exact: true,
  },
  {
    name: 'notFound',
    component: NotFound,
  },
];

export default serverRoutes;
