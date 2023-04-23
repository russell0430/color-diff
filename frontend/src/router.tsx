import { useRoutes } from "react-router-dom"
import Home from "./views/Home"
import Guide from "./views/Guide"
import Experiment from "./views/Experiment"
import Group from "./views/Group"
import Thank from "./views/Thank"
import Test from "./views/Test"
import Start from "./views/Start"

const router: React.FC = () => {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/guide",
      element: <Guide />,
    },
    {
      path: "/test",
      element: <Test />,
    },
    { path: "/start", element: <Start /> },
    {
      path: "/group",
      element: <Group></Group>,
    },
    {
      path: "/experiment",
      element: <Experiment />,
    },
    {
      path: "/thank",
      element: <Thank />,
    },
  ])
}

export default router
