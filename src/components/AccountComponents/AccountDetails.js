import React, { useEffect, useState, useRef } from "react";
//STYLE
import styled from "styled-components";
//ANIMATION
import { motion } from "framer-motion";
// react-redux
import { useSelector, useDispatch } from "react-redux";
// action
import updateCustomerAction from "../../actions/updateCustomerAction";
import { getAllCustomerDataAction } from "../../actions/Actions";
// axios
import { makeFormData } from "../../util";
//swal
import swal from "sweetalert";
const AccountDetails = () => {
  const dispatch = useDispatch();
  const { userData, fetchingUserData } = useSelector(
    (state) => state.userDetails
  );
  const { updated, isUpdating } = useSelector((state) => state.updateCustomer);
  useEffect(() => {
    dispatch(getAllCustomerDataAction());
  }, [dispatch]);
  const [data, setData] = useState({ ...userData });
  useEffect(() => {
    setData({ ...userData });
  }, [userData]);
  const ref = useRef(null);
  const dataHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    e.target.checkValidity();
    let formData = makeFormData(data);
    dispatch(updateCustomerAction(formData));
  };

  // update data

  useEffect(() => {
    console.log(updated);
    if (updated === true) {
      swal("Data Changed", "", "success");
    } else if (updated === false) {
      swal("Couldnt preform the action", "", "warning");
    }
    dispatch({ type: "UPDATEING_CUSTOMER" });
  }, [updated]);
  return (
    <StyledAccount>
      <Title>
        <h2>معلومات الحساب</h2>
      </Title>
      <Form onSubmit={submitHandler}>
        <InputWrapper>
          <label htmlFor="firstname">الهوية </label>
          <input
            type="text"
            name="customer_id"
            required
            onChange={dataHandler}
            value={data.customer_id}
            disabled
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="displayname">الاسم</label>
          <input
            type="text"
            name="name"
            required
            onChange={dataHandler}
            value={data.name}
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor=""> الايميل </label>
          <input
            type="email"
            name="email"
            required
            value={data.email}
            onChange={dataHandler}
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="">الجوال</label>
          <input
            type="text"
            name="phone"
            required
            value={data.phone}
            onChange={dataHandler}
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="">كلمة السر الجديدة</label>
          <input
            type="password"
            name="new_password"
            onChange={(e) => {
              dataHandler(e);
            }}
          />
        </InputWrapper>
        <Buttons>
          <button ref={ref} type="submit">
            تعديل
          </button>
        </Buttons>
      </Form>
    </StyledAccount>
  );
};
const StyledAccount = styled(motion.div)`
  width: 100%;
  height: auto;
  padding: 1rem;
  .de-active-btn {
    background-color: gray;
    pointer-events: none;
  }
  .warning {
    &:focus {
      outline-color: red;
    }
  }
  h2 {
    padding: 1rem;
    border-bottom: 2px solid #ddd;
  }
  box-shadow: 0 0 7px rgb(0 0 0 / 20%);
`;
const Title = styled.div`
  h2 {
    font-size: 1.7rem;
  }
`;
const InputWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;

  input {
    width: 100%;
    padding: 1em 0.5em;
    border: 1px solid rgb(80 80 80 /20%);
    font-size: 1em;
    &:focus {
      outline-color: #174bad;
    }
  }
  label {
    padding: 0.5rem 0;
    font-size: 0.9rem;
  }
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1em;
`;
const FLName = styled.div`
  width: 100%;
  display: flex;
`;
const Buttons = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  button {
    width: 15%;
    padding: 0.8rem 1.5rem;
    background-color: #174bad;
    border: none;
    font-size: 1.3rem;
    font-weight: bolder;
    text-align: center;
    color: white;
    cursor: pointer;
    transition: 0.5s all ease;
    border-radius: 0.4rem;
  }
`;
const Warning = styled.div`
  color: red;
  font-size: 1.1em;
  padding: 1rem 0;
  transition: 1s ease all;
  font-weight: 900;
  text-transform: capitalize;
`;
export default AccountDetails;
