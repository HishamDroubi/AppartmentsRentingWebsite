import React from "react";
import styled from "styled-components";
//ANIMATION
import { motion } from "framer-motion";
//
import { Link } from "react-router-dom";
// components
import Service from "./Service";
//images
import students from "../images/students.jpeg";
import studio from "../images/studio.jpg";
import family from "../images/family.jpeg";
const Services = () => {
  const servicesResponse = [
    {
      img: students,
      text: `نقوم من خلالها بعرض جميع الشقق المتوفرة لطلاب الجامعات 
      كما تستطيع طلب عدد الغرف التي تريدها بالمكان الذي تريده
  `,
      title: "سكنات طلاب",
    },
    {
      img: family,
      text: `نقوم من خلالها بعرض جميع الشقق المتوفرة لطلاب الجامعات 
      كما تستطيع طلب عدد الغرف التي تريدها بالمكان الذي تريده
  `,
      title: "سكنات عائلات",
    },
    {
      img: studio,
      text: `نقوم من خلالها بعرض جميع الشقق المتوفرة لطلاب الجامعات 
      كما تستطيع طلب عدد الغرف التي تريدها بالمكان الذي تريده
  `,
      title: "استوديو ",
    },
  ];
  return (
    <StyledServices>
      <Title>
        <h2>الافضل لدينا </h2>
      </Title>{" "}
      <ServicesContianer>
        {servicesResponse.map((service, index) => (
          <Service
            img={service.img}
            text={service.text}
            title={service.title}
            index={index}
          />
        ))}
      </ServicesContianer>{" "}
    </StyledServices>
  );
};
const StyledServices = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10em;
  margin-top: 2em;

  @media (max-width: 1100px) {
    padding: 0em 6em;
  }
  @media (max-width: 768px) {
    padding: 0em 2em;
  }
`;

const ServicesContianer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;
const Title = styled(motion.div)`
  padding: 2rem;

  h2 {
    font-size: 2.6rem;
    text-align: center;
  }
`;
export default Services;
