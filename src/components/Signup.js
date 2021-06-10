import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
//STYLE
import styled from "styled-components";
//ANIMATION
import { motion } from "framer-motion";
//
import { Link, useHistory, useLocation } from "react-router-dom";
//ACTION
import SignupAction from "../actions/signupCustomerAction";
// REACT-REDUX
import { useSelector, useDispatch } from "react-redux";
// lottie
import Lottie from "react-lottie";
import * as loading from "../lottie/loading.json";
// swal
import swal from "sweetalert";
// redux form
import { Field, reduxForm, reset } from "redux-form";
//
import { makeFormData } from "../util";

const Signup = (props) => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const { isLoading, response } = useSelector((state) => state.signup);
  const { openSignup } = useSelector((state) => state.Popup);
  const [data, setData] = useState({
    password: "",
  });
  const ref = useRef(null);
  // lottie
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const exitSignup = (e) => {
    dispatch({ type: "OPEN_SIGNUP", payload: !openSignup });
  };
  const signupHandler = (e) => {
    let formData = makeFormData(data);
    dispatch(SignupAction(formData));
  };
  useEffect(() => {
    checkResponse();
  }, [response]);
  const checkResponse = () => {
    if (response === true) {
      swal("تم التسجيل بنجاح", "You Can Login now", "success");
      dispatch({ type: "END_SIGNING_CUS_UP" });
      dispatch(reset("signup"));
      dispatch({ type: "OPEN_SIGNUP", payload: false });
      setTimeout(() => {
        dispatch({ type: "OPEN_LOGIN", payload: true });
      }, 1000);
    } else if (response === "exists") {
      swal("هذا الحساب مسجل مسبقا !", "", "info");
    }
  };

  const dataHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return ReactDOM.createPortal(
    <StyledSignup
      show={openSignup}
      onClick={() => dispatch({ type: "OPEN_SIGNUP", payload: !openSignup })}
    >
      <Wrapper
        onClick={(e) => {
          e.stopPropagation();
        }}
        show={openSignup}
      >
        <Title>
          <h2>التسجيل</h2>
        </Title>
        <form onSubmit={props.handleSubmit(signupHandler)} action="#">
          <div>
            <Field
              name="customer_id"
              aria-label="رقم الهوية"
              component={renderInput}
              onChange={dataHandler}
              type="text"
            />
            <Field
              name="name"
              aria-label="الاسم الكامل"
              component={renderInput}
              onChange={dataHandler}
              type="text"
            />
            <Field
              name="phone"
              aria-label="رقم الهاتف"
              component={renderInput}
              onChange={dataHandler}
              type="text"
            />
          </div>

          <div>
            <Field
              name="email"
              aria-label="البريد الالكرتوني"
              component={renderInput}
              onChange={dataHandler}
              type="email"
            />
            <Field
              name="password"
              aria-label="كلمة السر"
              component={renderInput}
              onChange={dataHandler}
              type="password"
              required
            />
          </div>
          <Buttons>
            <ButtonPrimary ref={ref} onClick={checkResponse}>
              التسجيل
              {!isLoading && (
                <Lottie options={defaultOptions} height={20} width={20} />
              )}
            </ButtonPrimary>
            <ButtonCanel type="button" onClick={exitSignup}>
              الخروج
            </ButtonCanel>
          </Buttons>
        </form>
      </Wrapper>
    </StyledSignup>,
    document.getElementById("portal")
  );
};
const StyledSignup = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  opacity: ${(props) => (props.show ? 1 : 0)};
  pointer-events: ${(props) => (props.show ? "all" : "none")};
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  transition: all 0.5s ease;
  backdrop-filter: blur(1rem);
  background: rgb(0, 0, 0, 0.6);

  .de-active-btn {
    background-color: gray;
    pointer-events: none;
  }
  .warning {
    &:focus {
      outline-color: red;
    }
  }
`;
const Title = styled(motion.div)`
  width: 100%;
  height: auto;
  h2 {
    font-size: 2rem;
  }
  text-align: center;
  padding: 1rem;
`;
const Wrapper = styled(motion.div)`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px black;
  border-radius: 1rem;
  box-shadow: 0 0 10px black;
  background: white;
  border-radius: 1rem;
  transition: all 0.5s ease;
  transform: ${(props) =>
    props.show
      ? "translate(-50%, -50%) scale(1)"
      : "translate(-50%, -50%) scale(0)"};
  form {
    border: 4px solid white;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    padding: 0 4rem;

    h2 {
      font-size: 2rem;
    }
  }
  @media (max-width: 768px) {
    width: 95%;
    height: auto;
    form {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
    }
  }
`;
const FormField = styled.input`
  width: 180%;
  height: 100%;
  border: 0;
  border-bottom: 1px solid black;
  outline: 0;
  font-size: 1rem;
  color: black;
  padding: 1rem 0;
  background: transparent;
  transition: border-color 0.2s;
  &::placeholder {
    color: transparent;
  }
  &:placeholder-shown ~ .form__label {
    font-size: 1rem;
    cursor: text;
    top: 20px;
  }

  &:focus {
    ~ .form__label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 0.8rem;
      color: rgb(17, 106, 196);
      font-weight: 700;
    }
  }
  &:required,
  &:invalid {
    box-shadow: none;
  }
  @media (max-width: 310px) {
    width: 140%;
  }
`;
const FormGroup = styled.div`
  width: 100%;
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 50%;
  .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 0.8rem;
    color: $gray;
  }
`;
const Buttons = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: flex-start;
  @media (max-width: 200px) {
    flex-wrap: wrap;
  }
`;
const ButtonPrimary = styled.button`
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2em;
  margin: 2em 0;
  background: #174bad;
  font-size: 1rem;
  text-align: center;
  color: black;
  font-weight: bold;
  cursor: pointer;
  border-radius: 1rem;
  transition: 0.2s;
  span {
    margin-right: 1em;
  }
  @media (max-width: 340px) {
    font-size: 0.8rem;
  }
`;
const ButtonCanel = styled(ButtonPrimary)`
  background: red;
  margin-right: 1rem;
`;

const renderInput = (props) => {
  const { input, meta, type } = props;
  return (
    <>
      <FormGroup>
        <FormField
          type={type}
          className="form__field"
          placeholder={input.name}
          {...input}
        />
        <label className="form__label">{props["aria-label"]}</label>
      </FormGroup>
      <span>{renderError(meta)}</span>
    </>
  );
};
const validate = (form) => {
  let error = {};
  if (!form.customer_id) {
    error.customer_id = "يجب عليك ادخال رقم هويتك  ";
  }
  if (!form.username) {
    error.username = "يجب عليك ادخال اسمك    ";
  }
  if (!form.phone) {
    error.phone = "يجب عليك ادخال رقم الهاتف  ";
  } else if (
    !/^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/g.test(
      form.phone
    )
  ) {
    error.phone = "رقم هاتف حاطئ";
  }
  if (!form.email) {
    error.email = "يجب عليك ادخال البريد الالكتروني ";
  }

  if (!form.email) {
    error.email = "يجب عليك ادخال البريد الالكتروني ";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)) {
    error.email = "بريد الكتروني خاطئ";
  }
  if (!form.password) {
    error.password = "يجب عليك ادخال كلمة السر   ";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/i.test(
      form.password
    )
  ) {
    error.password = "يجب عليك ادخال كلمة ضمن الشروط المعينة ";
  }
  return error;
};
const renderError = ({ touched, error }) => {
  if (touched && error) {
    return <span style={{ color: "red" }}>{error}</span>;
  }
};
export default reduxForm({
  form: "signup",
  validate,
})(Signup);
