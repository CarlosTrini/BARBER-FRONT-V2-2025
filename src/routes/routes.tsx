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



// export routesSystem = {
//     index: '/',
//     services: '/services',
//     branches: '/brances',
//     branches: 
// }