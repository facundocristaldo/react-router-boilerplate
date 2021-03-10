import { Box } from "@material-ui/core";
import React from "react";
import { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";

// import Burger from "../pages/Burger";
//For lazy loading, we call React.lazy with a function that returns the import statement
const Burger = React.lazy(() => import("../pages/Burger"));

const Layout = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Box marginTop={10}>
        <Switch>
          <Route
            path="/burger"
            exact
            //Lazy loading route with render and Suspense
            render={() => (
              <Suspense fallback={<div>Loading...</div>}>
                <Burger />
              </Suspense>
            )}
          />
          <Route path="/" exact component={Home} />
        </Switch>
      </Box>
    </BrowserRouter>
  );
};
export default Layout;
