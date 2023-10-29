import { createStandaloneToast } from "@chakra-ui/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { defaultRoutes } from "@/configs/data/routes";

import "@/themes/scss/style.scss";

function App() {
  const { ToastContainer } = createStandaloneToast();

  return (
    <>
      <RouterProvider router={createBrowserRouter(defaultRoutes)} />
      <ToastContainer />
    </>
  );
}

export default App;
