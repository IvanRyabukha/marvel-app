import { lazy, Suspense } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

// import { MainPage, ComicsPage, SingleComicPage, Page404 } from "../pages";
import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";

const Page404 = lazy(() => import("../pages/404"));
const MainPage = lazy(() => import("../pages/MainPage"));
const ComicsPage = lazy(() => import("../pages/ComicsPage"));
const SingleComicLayout = lazy(() => import("../pages/singelComicLayout/SingelComicLayout"))
const SingleCharacterLayout = lazy(() => import("../pages/singleCharacterLayout/SingleCharacterLayout"));
const SinglePage = lazy(() => import('../pages/SinglePage'));

const App = () => {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Suspense fallback={<Spinner />}>
            <Routes>

              <Route index element={<MainPage />} />

              <Route path="/comics" element={<ComicsPage />} />

              <Route path="/comics/:comicId" element={<SinglePage Component={SingleComicLayout} dataType='comic'/>} />

              <Route path="/characters/:comicId" element={<SinglePage Component={SingleCharacterLayout} dataType='character'/>} />

              <Route path="*" element={<Page404 />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
};

export default App;
