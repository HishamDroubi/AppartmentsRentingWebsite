import React from "react";
import styled from "styled-components";
//ANIMATION
import { motion } from "framer-motion";
//
import { Link } from "react-router-dom";
// IMAGES

const Service = ({ img, title, text, index }) => {
  return (
    <StyledService index={index}>
      <Content index={index}>
        <Title index={index}>
          <h3>{title}</h3>
        </Title>
        <Description index={index}>
          <p>{text}</p>
        </Description>
      </Content>{" "}
      <Image>
        <img src={img} alt="" />
      </Image>
    </StyledService>
  );
};

const Title = styled(motion.div)`
  width: 100%;
  h3 {
    text-align: center;
    font-size: 1.6rem;
  }
`;
const Description = styled(motion.div)`
  color: black;
  width: 100%;
  p {
    text-align: center;
    width: 100%;
  }
  @media (max-width: 360px) {
    width: 30ch;
  }
`;
const StyledService = styled(motion.div)`
  height: 100%;
  width: 100%;
  background-color: #f5f5f5;
  margin: 0.2em 0;
  display: flex;
  flex-direction: ${(props) => (props.index === 1 ? "row-reverse " : "row ")};
  justify-content: center;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 7px rgb(0 0 0 /10%);
  @media (max-width: 768px) {
    flex-flow: row wrap;
    ${Title} {
      text-align: center;
      align-self: center;
    }
    ${Description} {
      align-self: center;
      p {
        text-align: center;
        font-size: 0.7rem;
        font-weight: bold;
      }
    }
  }
`;
const Image = styled(motion.div)`
  flex: 1 1 55%;

  overflow: hidden;
  img {
    width: 100%;
    height: 45vh;

    display: block;
  }
`;
const Content = styled(motion.div)`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  align-items: center;
  padding: 0.5em 4em;
`;

export default Service;
