import React from "react";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";

const Specifications = ({ apartment }) => {
  return (
    <StyledSpecs>
      <div>
        <p>للتواصل مع صاحب الشقة : {apartment.phone}</p>
      </div>
      <ul>
        <h2>الخصائص</h2>
        <div>
          <li>المدينة</li>
          <li>{apartment.city_name}</li>
        </div>

        <div>
          <li>صاحب الشقة</li>
          <li>{apartment.name}</li>
        </div>
        <div>
          <li>الطابق</li>
          <li>{apartment.floor_number}</li>
        </div>
        <div>
          <li>عدد الغرف</li>
          <li>{apartment.number_of_rooms}</li>
        </div>
        <div>
          <li>نوع الشقة</li>
          <li>{apartment.type}</li>
        </div>
      </ul>
      <div>
        <h3>وصف الشقة</h3>
        <p>{apartment.description}</p>
      </div>
    </StyledSpecs>
  );
};
const StyledSpecs = styled(motion.div)`
  height: auto;
  width: 100%;
  padding: 2rem;
  margin-top: 1rem;
  box-shadow: 0 0 7px rgb(0 0 0 /10%);

  ul {
    width: auto;
    list-style-type: none;
    text-transform: uppercase;
    align-items: center;
    padding: 0.5rem 0;
    font-weight: bold;

    div {
      width: 100%;
      height: auto;
      display: flex;
      border-bottom: 2px dashed #ddd;
      li:nth-of-type(2) {
        color: gray;
        font-weight: normal;
      }
    }

    li {
      flex: 1 1 100%;
      padding: 1rem 0;
      width: 100%;
    }
  }
`;
export default Specifications;
