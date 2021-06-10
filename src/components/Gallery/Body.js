import React, { useState } from "react";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
import AppartmentCard from "../AppartmentCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useSelector, useDispatch } from "react-redux";
const Body = ({}) => {
  const { apartments } = useSelector((state) => state.getAllApartments);

  return (
    <StyledBody>
      <Title>
        {apartments.length ? (
          apartments.length ? (
            <h3>الشقق المتاحة </h3>
          ) : (
            <h3>لا يوجد شقق</h3>
          )
        ) : null}
      </Title>
      <Container>
        {apartments.map((apartment) => {
          return (
            <AppartmentCard
              key={apartment.apartment_id}
              pic={apartment.pic_path}
              title={apartment.title}
              city_name={apartment.city_name}
              price={apartment.price}
              apartment_id={apartment.appartment_id}
            />
          );
        })}
      </Container>
    </StyledBody>
  );
};
const StyledBody = styled(motion.div)`
  height: 100%;
  width: 100%;
  margin-right: 25%;
`;
const Container = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  div {
    flex: 1 1 30%;
  }
`;

const Title = styled(motion.div)`
  height: 100%;
  width: 100%;
  font-size: 1.7rem;
  padding: 1em 0;
`;

export default Body;
