import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import Home from "./pages/home/Home";
import { Login } from "./pages/SignUp/Login";
import { SingUp } from "./pages/SignUp/SingUp";

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
];
