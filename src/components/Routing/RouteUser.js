import React, { useState, useEffect, useRef } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
// ACTIONS

//REDUX
import { useSelector, useDispatch } from "react-redux";
const RouteUser = ({ reset }) => {
  const { response } = useSelector((state) => state.userLogin);
  const { openLogin } = useSelector((state) => state.Popup);

  const ref = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    if (response === "sucess") {
      dispatch({ type: "OPEN_LOGIN", payload: false });
    }
    if (response === "wrong") {
      ref.current = <Wrong>رقم الهوية او كلمة السر خطا</Wrong>;
    }
    if (response === "disabled") {
      ref.current = <Wrong>Your Account is disabled , contact the admin</Wrong>;
    }

    dispatch(reset("login"));
  }, [response]);
  useEffect(() => {
    if (!openLogin) {
      ref.current = null;
    }
  }, [openLogin]);
  return <div>{ref.current}</div>;
};
const Wrong = styled.div`
  padding: 0.5em;
  margin: 0.5em 0;
  font-size: 1.1rem;
  color: red;
`;
export default RouteUser;
