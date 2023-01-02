import React from "react";

export type AppRoutes = {
  path: string;
  exact: boolean;
  component: any;
};

const Auth = React.lazy(() => import("../pages/Auth"));
const Buy = React.lazy(() => import("../pages/Buy"));
const Sell = React.lazy(() => import("../pages/Sell"));



export const routes: AppRoutes[] = [
  { path: "/create-account", exact: true, component: Auth },
  { path: "/app/buy", exact: true, component: Buy },
  { path: "/app/sell", exact: true, component: Sell },
];

