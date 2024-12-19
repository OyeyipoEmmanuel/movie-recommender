import { Route, Routes, useLocation } from "react-router-dom";
import React, { Suspense, useEffect } from "react";
import Loading from "./components/Loading";

const MoviesList = React.lazy(() => import("./pages/MoviesList/MoviesList"));
const HomePage = React.lazy(() => import("./pages/Home/HomePage"));
const Nav = React.lazy(() => import("./components/Nav"));

function App() {
  const location = useLocation();
  // Remove the movies list from local storage when user leaves the /movies-list path
  useEffect(() => {
    const handleRemoveOnChangeLocation = () => {
      if (location.pathname === "/" && localStorage.getItem("MoviesList")) {
        localStorage.removeItem("MoviesList");
      }
    };

    handleRemoveOnChangeLocation();
  }, [location]);

  return (
    <div className="">
      <Suspense
        fallback={
          <div className="mx-auto flex items-center justify-center">
            <Loading isLoadingProp="true" />
          </div>
        }
      >
        <Nav />
        <div className="pt-[5rem]">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/movies-list" element={<MoviesList />} />
          </Routes>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
