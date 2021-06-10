import React from "react";
//STYLE
import styled from "styled-components";
//ANIMATION
import { motion } from "framer-motion";
//IMAGES
import bet from "../images/ilovebeth.jpg";
import jerusalem from "../images/we_love_rerusalem.jpg";
// components
import Line from "../components/Line";
const AdsCard = () => {
  return (
    <Wrapper>
      <Title>
        <h2>الاعلانات</h2>
      </Title>
      <Content>
        <StyledCards>
          <Card>
            <img src={bet} alt="" />
          </Card>
          <Card>
            <img src={jerusalem} alt="" />
          </Card>
        </StyledCards>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  margin: 4em 0;
`;
const Content = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 1em;

  padding: 0 10rem;
  @media (max-width: 1100px) {
    padding: 0em 6em;
  }
  @media (max-width: 768px) {
    padding: 0em 2em;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
const StyledCards = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 900px) {
    flex-direction: column;
  }
  div:nth-of-type(2) {
    margin-right: 2em;
  }
`;

const Card = styled(motion.div)`
  width: auto;
  height: 100%;
  flex: 1 1 46%;
  cursor: pointer;
  box-shadow: 0 0 7px rgb(0 0 0 /50%);
  border-radius: 10px;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
    display: block;
    min-height: 52.5vh;
  }
  @media (max-width: 900px) {
    flex: 1 1 25%;
    margin: 1em 0;
  }
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
export default AdsCard;
