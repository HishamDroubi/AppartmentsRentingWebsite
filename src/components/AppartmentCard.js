import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import test from "../images/test.png";
import { Link } from "react-router-dom";
import { base_url } from "../api";
let cat = ["اطفال", "احذية", "ملابس"];
const AppartmentCard = ({ pic, title, city_name, price, apartment_id }) => {
  return (
    <StyledStore>
      <img src={`${base_url}/customers/${pic}`} alt="" />
      <Title>
        <h3>{title}</h3>
      </Title>
      <Categories>
        <span>{city_name}</span>
      </Categories>
      <Categories>
        <span>السعر :</span>
        <span>{price}</span>
      </Categories>
      <Buttons>
        <Link to={`/apartmentDetails/${apartment_id}`}>
          <button>احجز الان!!</button>
        </Link>
      </Buttons>
    </StyledStore>
  );
};
const StyledStore = styled(motion.div)`
  height: 100%;
  margin: 0.5em;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 7px rgb(0 0 0 / 10%);
  overflow: hidden;
  img {
    height: 40vh;
    width: auto;
    display: block;
  }
  @media (max-width: 750px) {
    flex: 0 0 400px;
  }
`;
const Title = styled(motion.div)`
  height: auto;
  width: 100%;

  h3 {
    color: #333;
    font-size: 1.2rem;
    padding-top: 0.5em;
  }
`;
const Categories = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  span {
    color: #333;
    width: auto;
    padding: 0.2rem 0.1rem;
  }
`;
const Buttons = styled(motion.div)`
  width: 100%;
  padding-top: 1rem;
  button {
    width: 100%;
    padding: 1rem 2rem;
    background-color: #174bad;
    border: none;
    font-size: 1.3rem;
    font-weight: bolder;
    text-align: center;
    color: white;
    cursor: pointer;
    transition: 0.2s all ease;
    z-index: 2;
    outline: 0;
    &:hover {
      background-color: #1d62e0;
    }
  }
`;
export default AppartmentCard;
