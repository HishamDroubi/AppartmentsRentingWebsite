import React, { useEffect } from "react";
// components
import Header from "../components/Header";

import Main from "../components/Main";
//style
import styled from "styled-components";

import { useDispatch } from "react-redux";
import getAllApartmentsAction from "../actions/getAllApartmentsAction";
// routing
const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    //whenever a re-redner happens this check for user login status
    dispatch(getAllApartmentsAction());
  }, []);

  return (
    <HomePageStyled>
      <Header />
      <Main />
    </HomePageStyled>
  );
};
const HomePageStyled = styled.div`
  height: auto;
  width: 100%;
`;
export default HomePage;
