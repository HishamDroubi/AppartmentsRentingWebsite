import React from "react";
import styled from "styled-components";
//ANIMATION
import { motion } from "framer-motion";
//ROUTING
import { Link } from "react-router-dom";
// components
import AppartmentCard from "./AppartmentCard";
import { useDispatch, useSelector } from "react-redux";
const Offers = () => {
  const { apartments } = useSelector((state) => state.getAllApartments);
  return (
    <StyledOffers>
      <Title>
        <h2>أحدث الشقق</h2>
        <h3>احجز شقتك الان! </h3>
      </Title>
      <Wrapper>
        {apartments !== "Empty" &&
          apartments.length !== 0 &&
          apartments.map((apartment) => (
            <AppartmentCard
              key={apartment.apartment_id}
              pic={apartment.pic_path}
              title={apartment.title}
              city_name={apartment.city_name}
              price={apartment.price}
              apartment_id={apartment.appartment_id}
            />
          ))}
      </Wrapper>
    </StyledOffers>
  );
};
const StyledOffers = styled(motion.div)`
  height: 100%;
  width: auto;
  min-height: 100vh;
  padding-top: 2rem;
`;
const Title = styled(motion.div)`
  h2,
  h3 {
    text-align: center;
    color: #2b2a2a;
  }
  h3 {
    margin-bottom: 1em;
  }
`;
const Wrapper = styled(motion.div)`
  height: 100%;
  width: auto;
  display: flex;
  justify-content: center;
  @media (max-width: 750px) {
    flex-wrap: wrap;
  }
`;
export default Offers;
