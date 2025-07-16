import { About } from "./pages/About";
import { Account } from "./pages/Account/Account";
import { CartPage } from "./pages/Cart/CartPage";
import { CheckOutPage } from "./pages/CheacOut";
import { Contact } from "./pages/Contact";
import Home from "./pages/home/Home";
import { Login } from "./pages/SignUp/Login";
import { SingUp } from "./pages/SignUp/SingUp";
import { Wishlist } from "./pages/Wishlist";

export const routes = [
  {
    id: 1, // har bir obyektga alohida id quyib beradi
    name: "homega", // homega path shart emas
    component: Home,
    path: "/",
  },
  {
    id: 2, // har bir obyektga alohida id quyib beradi
    name: "Contact", // homega path shart emas
    component: Contact,
    path: "/contact",
  },
  {
    id: 3, // har bir obyektga alohida id quyib beradi
    name: "About", // homega path shart emas
    component: About,
    path: "/about",
  },
  {
    id: 4, // har bir obyektga alohida id quyib beradi
    name: "Sing Up", // homega path shart emas
    component: SingUp,
    path: "/singup",
  },
  {
    id: 5, // har bir obyektga alohida id quyib beradi
    name: "Login", // homega path shart emas
    component: Login,
    path: "/login",
  },
  {
    id: 6, // har bir obyektga alohida id quyib beradi
    name: "Wishlist", // homega path shart emas
    component: Wishlist,
    path: "/wishlist",
  },
  {
    id: 7, // har bir obyektga alohida id quyib beradi
    name: "Cart", // homega path shart emas
    component: CartPage,
    path: "/cartpage",
  },
  {
    id: 8, // har bir obyektga alohida id quyib beradi
    name: "CheckOut", // homega path shart emas
    component: CheckOutPage,
    path: "/checkout",
  },
  {
    id: 9, // har bir obyektga alohida id quyib beradi
    name: "Account", // homega path shart emas
    component: Account,
    path: "/account",
  },
];
