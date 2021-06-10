import React, { useState } from "react";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
import Specifications from "./Specifications";
import Slider from "react-slick";
import Reviews from "./Reviews";
import { base_url } from "../../api";
const Body = ({ apartment, pic }) => {
  let arr = [
    <Specifications apartment={apartment} />,
    <Reviews apartment={apartment} />,
  ];
  const setting = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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
  const [CurrentPanel, setCurrentPanel] = useState(0);
  return (
    <StyledBody>
      <Title>
        <h3>{apartment.title}</h3>
      </Title>
      <div style={{ display: "flex", gap: "1rem" }}>
        <div style={{ flex: "40%" }}>
          <InfoPanel>
            <ul>
              <li
                className={0 === CurrentPanel ? "active" : ""}
                onClick={() => setCurrentPanel(0)}
              >
                المعلومات
              </li>
              <li
                className={1 === CurrentPanel ? "active" : ""}
                onClick={() => setCurrentPanel(1)}
              >
                الطلب والتواصل
              </li>
            </ul>
          </InfoPanel>
          <Info>{arr[CurrentPanel]}</Info>
        </div>{" "}
        <SliderDiv style={{ overflow: "hidden" }}>
          <StyledSlider {...setting}>
            {pic &&
              pic.map((p) => {
                return (
                  <img
                    style={{ borderRadius: 20 }}
                    src={`${base_url}/customers/${p.pic_path}`}
                    alt=""
                  />
                );
              })}
          </StyledSlider>
        </SliderDiv>
      </div>
    </StyledBody>
  );
};

const StyledBody = styled(motion.div)`
  height: 100%;
  width: 100%;
`;
const SliderDiv = styled(motion.div)`
  height: 100%;
  width: 60%;
`;
const StyledSlider = styled(Slider)`
  overflow: "hidden";
`;

const Title = styled(motion.div)`
  height: 100%;
  width: 100%;
  padding: 2rem;
`;
const Info = styled(motion.div)`
  width: 100%;
  height: 100%;
`;
const InfoPanel = styled(motion.div)`
  height: auto;
  width: 100%;
  ul {
    display: flex;
    width: 100%;
    background: #f7f7f7;

    justify-content: space-between;
    li {
      width: 100%;
      list-style-type: none;
      text-align: center;
      margin: 0 1rem;
      position: relative;
      padding: 0.9rem 0;
      cursor: pointer;
    }
    .active {
      color: #1d62e0;
      font-weight: 600;
      &:before {
        content: "";
        width: 100%;
        position: absolute;
        top: 100%;
        left: 0;
        height: 2px;
        background: #1d62e0;
      }
    }
  }
`;

export default Body;
