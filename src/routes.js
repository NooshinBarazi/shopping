import CartPage from './pages/cartPage/CartPage';
import SignupPage from './pages/signupPage/SignupPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from "./pages/HomePage";


const routes = [
    {path: "/cart", component: CartPage},
    {path: "/signup", component: SignupPage },
    {path: "/login", component: LoginPage },
    {path: "/profile", component: ProfilePage },
    {path: "/", component: HomePage},
    {path: "" , component: NotFoundPage},
  ];

  export default routes;