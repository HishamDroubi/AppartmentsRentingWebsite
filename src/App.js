import React, { useState, useEffect } from "react";
// pages
import HomePage from "./pages/HomePage";
import Gallery from "./pages/Gallery";
import CarDetails from "./pages/ApartmentDetails";
import Account from "./pages/Account";
import Login from "./components/Login";
import Signup from "./components/Signup";

//COMPONENTS
import GlobalStyle from "./components/GlobalStyle";
import Navbar from "./components/Navbar";
// ROUTING
import { Route, Switch } from "react-router-dom";
// redux
import { useDispatch, useSelector } from "react-redux";
// action
import isUserLoggedInAction from "./actions/isUserLoggedInAction";
import { getAllCustomerDataAction } from "./actions/Actions";
import Footer from "./components/Footer";

function App() {
  const { userStatus } = useSelector((state) => state.userStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    //whenever a re-redner happens this check for user login status
    dispatch(isUserLoggedInAction());
    dispatch(getAllCustomerDataAction());
    //dispatch(getAllApartmentsAction());
  }, [userStatus]);

  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Login />
      <Signup />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path={["/gallery", "/gallery/:id"]} exact>
          <Gallery />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
        <Route path={["/apartmentDetails/:id"]}>
          <CarDetails />
        </Route>

        <Route>
          <span>405</span>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
