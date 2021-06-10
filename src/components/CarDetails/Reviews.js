import React, { useEffect, useState } from "react";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
//
import { useSelector, useDispatch } from "react-redux";
import swal from "sweetalert";
import { reserveAppartmentAction } from "../../actions/Actions";
const Reviews = ({ apartment }) => {
  const dispatch = useDispatch();
  const { userStatus, token } = useSelector((state) => state.userStatus);
  const { userData } = useSelector((state) => state.userDetails);
  console.log(userData.customer_id === apartment.customer_id);
  const [data, setData] = useState({
    message: null,
  });

  const dataHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const onSend = (e) => {
    e.preventDefault();
    e.target.checkValidity();
    let formData = new FormData();
    formData.append("appartment_id", apartment.appartment_id);
    formData.append("message", data.message);
    formData.append("token", apartment.token);
    formData.append("mytoken", localStorage.getItem("token"));
    reserveAppartmentAction(formData);
  };
  return (
    <StyledReviews>
      {userStatus === false && (
        <Title>
          <h3>سجل الدخول اولا </h3>
        </Title>
      )}
      {userStatus === true && (
        <>
          <Title>
            <h3>تواصل مع صاحب الشقة</h3>
          </Title>
          <Form onSubmit={onSend}>
            <textarea
              name="message"
              style={{ padding: "1rem", fontSize: 18 }}
              id=""
              cols="30"
              rows="10"
              placeholder={
                userData.customer_id === apartment.customer_id
                  ? "انت المالك لهذه الشقة"
                  : "توصل مع صاحب الشقة"
              }
              name="message"
              value={data.message}
              onChange={dataHandler}
              required
              disabled={
                userData.customer_id === apartment.customer_id ? true : false
              }
            ></textarea>
            <ButtonPrimary>
              <button
                onClick={onSend}
                disabled={
                  userData.customer_id === apartment.customer_id ? true : false
                }
              >
                ارسل
              </button>
            </ButtonPrimary>
          </Form>
        </>
      )}
    </StyledReviews>
  );
};
const StyledReviews = styled(motion.div)``;
const Title = styled(motion.div)`
  display: block;
  width: 100%;
  height: 100%;
  margin: 2rem 0;
  h3 {
    font-size: 2rem;
    padding: 1rem 0;
  }
  p {
    font-size: 1rem;
  }
`;
const Form = styled(motion.form)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    input {
      flex: 1 1 40%;
      border: 2px solid #ccc;
      padding: 0.7rem;
      border-radius: 0.5rem;
    }
  }
  textarea {
    border: 2px solid #ccc;
    padding: 0.5rem;
    margin: 0.5rem 0;
    border-radius: 0.5rem;
  }
`;
const ButtonPrimary = styled.div`
  width: 100%;

  button {
    width: 100%;
    padding: 1.2rem 1.8rem;
    border: none;
    background: #1d62e0;
    font-size: 1.3rem;
    word-spacing: 2px;
    text-align: center;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.5rem;
  }
`;
export default Reviews;
