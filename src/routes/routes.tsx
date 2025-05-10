import React from "react";
import LayoutLanding from "../layouts/landing/LayoutLanding";

const Home = React.lazy(() => import("../site/publicSite/home/Home"));
const Auth = React.lazy(() => import("../site/auth/Auth"));

const routes = [
    {
        path: "/",
        element: <LayoutLanding />,
        // errorElement: <div>Error</div>,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "services",
                element: <div>Services</div>,
            },
            {
                path: "branches",
                children: [
                    {
                        index: true,
                        element: <h1>Branches</h1>,
                    },
                    {
                        path: "polanco",
                        element: <div>Polanco</div>,
                    }
                ]
            }
        ]
    },
    {
        path: "/auth",
        element: <Auth />,
    }
];

export default routes;



// const router = createBrowserRouter([
//     {
//       Component: MainLayout,
//       children: [
//         { index: true, Component: Home },         // /
//         { path: "login", Component: Auth },       // /login
//         { path: "register", Component: Register },// /register
//       ],
//     },
//     {
//       path: "cms",
//       Component: AdminLayout,
//       children: [
//         { index: true, Component: Dashboard },     // /cms
//         { path: "users", Component: Users },       // /cms/users
//         { path: "settings", Component: Settings }, // /cms/settings
//       ],
//     },
//   ])