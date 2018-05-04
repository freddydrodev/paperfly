import Login from "../Pages/Login/Login.js";
import Registration from "../Pages/Registration/Registration.js";
import PasswordForget from "../Pages/PasswordForget/PasswordForget.js";
import PageNotFound from "../Pages/PageNotFound/PageNotFound.js";

const routes = [
  { title: "Login Page", path: "/", exact: true, component: Login },
  {
    title: "Registration Page",
    path: "/registration",
    exact: true,
    component: Registration
  },
  {
    title: "Password Forget Page",
    path: "/password-forget",
    exact: true,
    component: PasswordForget
  },
  {
    title: "404 Page Not Found",
    path: "*",
    exact: true,
    component: PageNotFound
  }
];


export default routes;