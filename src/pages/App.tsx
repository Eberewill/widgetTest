import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes, AppRoutes } from "../constants/routes";
import { Box } from "@chakra-ui/react";

import Home from "./Home";

function AppWrapper({ children }: { children: React.ReactNode }) {
  return <Box>{children}</Box>;
}

export default function App() {
  return (
    <Suspense fallback={null}>
      <Router>
        <AppWrapper>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
          {
            <Routes>
              {routes.map((route: AppRoutes, index: number) => {
                const { component: Component, path, exact } = route;
                return (
                  <Route key={index} path={path} element={<Component />} />
                );
              })}
            </Routes>
          }
        </AppWrapper>
      </Router>
    </Suspense>
  );
}
