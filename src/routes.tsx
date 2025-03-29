import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/mainLayout";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";


const routes = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        errorElement: <div>Oops! Something went wrong.</div>,
        children: [
            {index: true, element: <HomePage />},
            {path: "about", element: <AboutPage />},
           

        ]
    }
])

export default routes;