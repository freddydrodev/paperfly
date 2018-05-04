import AppWrapper from '../Containers/AppWrapper.js'
import LogWrapper from "../Containers/LogWrapper/LogWrapper.js";

const routes = [
  {
    title: "App Pages",
    path: "/app",
    component: AppWrapper
  },
  {
    title: "Log Pages",
    path: "/",
    component: LogWrapper
  }
];

export default routes;