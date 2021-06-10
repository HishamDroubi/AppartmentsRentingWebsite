import React, { useState, useEffect } from "react";
//STYLE
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import userDataAction from "../actions/userDataAction";
//ANIMATION
import { motion } from "framer-motion";
import getAllApartmentsAction from "../actions/getAllApartmentsAction";
import Dashboard from "../components/AccountComponents/Dashboard";
import AccountDetails from "../components/AccountComponents/AccountDetails";
import AddApartment from "../components/AccountComponents/AddApartment";
import { useLocation, Link, Switch, Route, useHistory } from "react-router-dom";
const Account = () => {
  const dispatch = useDispatch();
  const { userStatus } = useSelector((state) => state.userStatus);
  useEffect(() => {
    // dispatch(userDataAction());
    dispatch(getAllApartmentsAction());
  }, [dispatch]);

  return (
    <StyledAccount>
      <Wrapper>
        <Switch>
          <Route path={["/account", "/account/dashboard"]} exact>
            <Dashboard />
          </Route>
          <Route path="/account/accountdetails">
            <AccountDetails />
          </Route>

          <Route path="/account/addapartment">
            <AddApartment />
          </Route>
        </Switch>
      </Wrapper>
      <StyledNavbar>
        <List>
          <StyledLink to="/account">
            <Item>
              <li>
                <div>
                  <i class="fas fa-border-all"></i>
                  <span>الرئيسية</span>
                </div>
              </li>
            </Item>
          </StyledLink>
          <StyledLink to="/account/accountdetails">
            <Item>
              <li>
                <div>
                  <i className="fas fa-user-alt"></i>
                  <span>معلومات الحساب </span>
                </div>
              </li>
            </Item>
          </StyledLink>
          <StyledLink to="/account/addapartment">
            <Item>
              <li>
                <div>
                  <i className="fas fa-home"></i> <span>اضف شقة</span>
                </div>
              </li>
            </Item>
          </StyledLink>
          <StyledLink>
            <Item>
              <li>
                <div>
                  <i className="fas fa-sign-out-alt"></i>
                  <span>الخروج</span>
                </div>
              </li>
            </Item>
          </StyledLink>
        </List>
      </StyledNavbar>
    </StyledAccount>
  );
};

const StyledAccount = styled(motion.div)`
  width: 100%;
  overflow: hidden;
`;
const Wrapper = styled.div`
  transition: 0.75s all ease;
  padding: 2rem;
  margin-right: 15%;
`;
const StyledNavbar = styled(motion.div)`
  position: fixed;
  height: 100%;
  top: 8vh;
  right: 0;

  width: 15%;
  transform: translateX(0);
  transition: 0.5s all ease;
  opacity: 1;
  overflow-y: auto;

  ul {
    padding: 2rem 0;
  }
`;
const Item = styled(motion.div)`
  width: 100%;
  height: 8vh;
`;

const List = styled.ul`
  background: #252b3b;
  color: white;
  transition: all 0.75s ease;
  height: 50vh;
  min-height: 100vh;
  li {
    width: 100%;
    height: 100%;
    list-style-type: none;
    padding: 1rem;
    font-size: 0.8rem;
    transition: 0.2s all ease-in-out;
    pointer-events: all;
    cursor: pointer;
    pointer-events: none;
    display: flex;
    align-items: center;
    div {
      display: flex;
      align-items: center;
      flex: 1 1 90%;
    }
    span {
      display: flex;
      align-items: center;
      flex: 1 1 10%;
      i {
        font-size: 0.8rem;
      }
    }
    i {
      font-size: 1.3rem;
      margin-left: 10px;
    }
  }

  @media (max-width: 900px) {
    width: auto;
  }
`;
const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    color: white;
    text-decoration: none;
  }
`;
export default Account;
