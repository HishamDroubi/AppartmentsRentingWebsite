import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
import banner1 from "../images/banner1.jpg";

const Header = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  let headerResponse = [
    {
      img: banner1,
      header: "احجز شقتك الان!",
      text: `يقول الملاحدة أن هذا الكون المادي لا يحتاج إلى خالق، ولكننا اذا سلمنا بان
        هذا الكون موجود فكيف نفسر وجوده ونشأته؟ هنالك اربعة احتمالات للاجابة عن هذا
        السؤال: فاما ان يكون هذا الكون مجرد وهم وخيال، وهو ما يتعارض مع القضية التي
        سلمنا بها حول وجوده، واما ان يكون هذا الكون قد نشأ من تلقاء نفسه من العدم، واما
        ان يكون أبديا ليس لنشأته بداية، واما ان يكون له خالق.`,

      button: "الخدمات",
    },
  ];

  const changeBanner = (index) => {
    setCurrentBanner(index);
  };

  const shuffleBanner = () => {};

  return (
    <HeaderStyled img={headerResponse[currentBanner].img}>
      <LeftStyle>
        <Title>
          <h2>تجول في سكنات المدن الفلسطينية من خلالنا </h2>
        </Title>
      </LeftStyle>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.div`
  min-height: 65vh;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  position: relative;
`;
const Title = styled(motion.div)`
  h2 {
    font-size: 3rem;
    text-align: center;
    padding: 1em;
    word-wrap: break-word;
  }
  text-transform: capitalize;
  text-shadow: 0 0 7px black;
`;
const Search = styled(motion.div)`
  width: 100%;
  input {
    width: 100%;
    padding: 10px 15px;
    border-radius: 10px;
    border: none;
    font-size: 1.1em;
    outline: none;
  }
`;
const Content = styled(motion.div)`
  width: 60%;
  margin: 0 auto;
  position: relative;
  top: 40%;
  transform: translateY(-50%);
`;

const LeftStyle = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: rgb(0, 0, 0, 0.5);
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;

  @media (max-width: 1000px) {
    padding: 2em;
    font-size: 0.8rem;
  }
`;
const Buttons = styled(motion.div)`
  font-size: 1.5rem;
  padding: 1rem 0;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const ButtonPrimary = styled.button`
  padding: 1.2rem 1.8rem;
  margin-right: 1rem;
  border: none;

  font-size: 1.3rem;
  text-align: center;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border-radius: 1rem;
`;
const Button = styled(ButtonPrimary)`
  background: #174bad;
`;

export default Header;
