import JourneyListPage from "pages/JourneyList/JourneyList.page";
import HomePage from "pages/Home/Home.page";

const routes = [
  {
    path: "/",
    component: <HomePage />,
    name: "home",
  },
  {
    path: "/journey-list",
    component: <JourneyListPage />,
    name: "journeyList",
  },
];

export default routes;
