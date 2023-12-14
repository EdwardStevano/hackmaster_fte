import { React, lazy } from "react";
import { Route, Routes } from "react-router-dom";

// Main pages importation
const __Explore = lazy(() => import('@pages/explore'))
const __Home__Section = lazy(() => import('@pages/explore/content/explore/mainExplore'))

function ExploreRoutes() {
  return (
      <Routes>
        <Route path="/explore" element={<__Explore />}>
            <Route index element={<__Home__Section />} />
            <Route path="home" element={<__Home__Section />} />
        </Route>
      </Routes>
  );
}

export default ExploreRoutes;
