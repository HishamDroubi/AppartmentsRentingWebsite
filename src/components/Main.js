import React from "react";
//STYLE
import styled from "styled-components";
//ANIMATION
import { motion } from "framer-motion";
//
import { Link } from "react-router-dom";
// IMAGES

import Offers from "../components/Offers";
import Cities from "../components/Cities";
import Services from "../components/Services";
import AdsCard from "../components/AdsCard";

const Main = () => {
  return (
    <StyledMain>
      <Cities />
      <Services />
      <Offers />
    </StyledMain>
  );
};

const StyledMain = styled(motion.div)`
  height: 100%;
  width: 100%;
`;

export default Main;
