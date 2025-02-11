import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../App";
import Chart from "../pages/Chart/Chart";
import Whook from "../pages/Whook/Whook";
import Event from "../pages/Event/Event";
import News from "../pages/News/News";
import Store from "../pages/Store/Store";
import Charge from "../pages/Charge/Charge";
import ErrorBoundary from "../pages/ErrorBoundary/ErrorBoundary";

const routerData: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Chart /> },
      { path: "whook", element: <Whook /> },
      { path: "event", element: <Event /> },
      { path: "news", element: <News /> },
      { path: "store", element: <Store /> },
      { path: "charge", element: <Charge /> },
    ],
    errorElement: <ErrorBoundary />,
  },
];

const router = createBrowserRouter(routerData);

export default router;
