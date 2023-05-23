import {createBrowserRouter, Outlet} from "react-router-dom";
import routes from "./pages/routes.ts";
import Header from "./components/header/Header.tsx";

const AppLayout = () => (
  <>
    <Header/>
    <Outlet/>
  </>
)

export const AppRouter = createBrowserRouter(
  [{
    element: <AppLayout/>,
    children: [
      ...routes
    ]
  }]
)
