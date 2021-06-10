import React, { useState, useRef } from "react";
//STYLE
import styled from "styled-components";
//ANIMATION
import { motion } from "framer-motion";
//
import { Link } from "react-router-dom";
// redux
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { logoutURL } from "../api";
import isUserLoggedInAction from "../actions/isUserLoggedInAction";

//css
const Navbar = () => {
  const dispatch = useDispatch();
  const { userStatus } = useSelector((state) => state.userStatus);
  const { openLogin, openSignup } = useSelector((state) => state.Popup);
  const userLogout = async () => {
    let res = await axios.get(logoutURL, { withCredentials: true });
    console.log(res);
    dispatch(isUserLoggedInAction());
  };
  const ref = useRef();

  return (
    <Wrapper>
      <StyledNav ref={ref}>
        <ul>
          <StyledLink to={"/"}>
            <li>الرئيسية</li>
          </StyledLink>
          <StyledLink to={"/gallery"}>
            <li>الشقق</li>
          </StyledLink>
          {!userStatus && (
            <>
              <li
                onClick={() =>
                  dispatch({ type: "OPEN_LOGIN", payload: !openLogin })
                }
              >
                سجل الدخول
              </li>

              <li
                onClick={() =>
                  dispatch({ type: "OPEN_SIGNUP", payload: !openSignup })
                }
              >
                التسجيل
              </li>
            </>
          )}
          {userStatus && (
            <>
              <StyledLink to={"/account"}>
                <li>الحساب</li>
              </StyledLink>

              <StyledLink to={"/"}>
                <li onClick={userLogout}>الخروج</li>
              </StyledLink>
            </>
          )}
        </ul>
        <StyledLink to="/">
          <StyledLogo className="logo">
            <span>Logo</span>
          </StyledLogo>
        </StyledLink>
      </StyledNav>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .active-nav {
    position: fixed;
    top: 0;
  }
`;
const StyledNav = styled(motion.nav)`
  height: 8vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  font-weight: bold;
  padding: 0 3.5rem;
  transition: all 1s ease;
  background-size: cover;
  box-shadow: 0 0 7px black;
  background-repeat: no-repeat;
  background: white;
  ul {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    li {
      font-size: 1rem;

      list-style: none;
      padding: 0rem 1rem;
      cursor: pointer;
    }
  }

  @media (max-width: 1200px) {
    padding: 2rem;
    font-size: 1.2rem;
    ul {
      li {
        padding: 0rem 0.5rem;
        margin: 0rem 0.5rem;
      }
    }
  }
  @media (max-width: 570px) {
    ul {
      li {
        font-size: 1rem;
      }
    }
  }
  @media (max-width: 570px) {
    display: none;
  }
`;
const StyledLink = styled(Link)`
  color: black;
  width: auto;
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    color: black;
    text-decoration: none;
  }
`;
const StyledLogo = styled(motion.div)`
  cursor: pointer;
  width: auto;

  span {
    font-size: 2rem;
    color: black;
  }

  color: black;
  @media (max-width: 570px) {
    span {
      font-size: 1rem;
    }
  }
  @media (max-width: 1200px) {
    span {
      font-size: 1rem;
    }
  }
`;
export default Navbar;
