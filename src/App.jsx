import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes/index";
import useAuthToken from "./utils/auth";
import Loading from "./components/loading/index";
import HandleReloading from "./utils/navigation";

function App() {
  const { userToken, isLoading } = useAuthToken();

  if(isLoading) {
    return <Loading />;
  };

  return (
    <Router>
      <div className="App">
        <HandleReloading />
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            const Layout = route.layout || Fragment;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    {userToken &&
                    (route.path === "/sign-in" || route.path === "/sign-up") ? (
                      <Navigate to="/" />
                    ) : (
                      <Page />
                    )}
                  </Layout>
                }
              />
            );
          })}

          {privateRoutes.map((route, index) => {
            const Page = route.component;
            const Layout = route.layout || Fragment;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    {userToken ? <Page /> : <Navigate to="/sign-in" />}
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
