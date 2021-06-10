import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import nablus from "../images/Love_Nablus.jpeg";
import bet from "../images/ilovebeth.jpg";
import jerusalem from "../images/we_love_rerusalem.jpg";
import ramallah from "../images/we-ramallah.jpg";
const Cities = () => {
  const setting = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <StyledCitiies>
      <Title>
        <h2>المدن الفلسطينية</h2>
        <h3> اختر مدينتك المستقبلية </h3>
      </Title>
      <Wrapper>
        <Slider {...setting}>
          <Link to={`/gallery/${1}`}>
            <img src={nablus} alt="" className="image-container" />
          </Link>
          <Link to={`/gallery/${2}`}>
            <img src={bet} alt="" className="image-container" />
          </Link>
          <Link to={`/gallery/${3}`}>
            <img src={jerusalem} alt="" className="image-container" />
          </Link>
          <Link to={`/gallery/${4}`}>
            <img src={ramallah} alt="" className="image-container" />
          </Link>
        </Slider>
      </Wrapper>
    </StyledCitiies>
  );
};
const StyledCitiies = styled(motion.div)`
  min-height: 30vh;
  height: 100%;
  padding: 0 2em;
`;
const Title = styled(motion.div)`
  margin-top: 3rem;
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
  width: 100%;
  height: 50vh;
  ${Slider} {
    overflow: hidden;
    margin-top: 6rem;
  }
  .image-container {
    width: 30vw;
    overflow: hidden;
    color: white;
    box-shadow: 0 0 7px rgb(0 0 0 /50%);
    border-radius: 10px;
    transition: 0.2s all ease;
    cursor: pointer;
    margin: 0.5em;
    height: 40vh;
    &:hover {
      transform: scale(1.01);
    }
  } /* the slides */
  .slick-slide {
    margin: 0 10px;
  }
  /* the parent */

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export default Cities;
