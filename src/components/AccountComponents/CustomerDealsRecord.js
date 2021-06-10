import React from "react";
import styled from "styled-components";

const CustomerDealsRecord = ({ td }) => {
  return <AppliedStyle>{td}</AppliedStyle>;
};
const AppliedStyle = styled.tr`
  img {
    height: 50px;
  }
  td {
    background-color: ${(props) =>
      props.status === "declined" ? "#dc3545" : ""};
    opacity: ${(props) => (props.status === "declined" ? 0.75 : 1)};
    color: black;
  }
`;

export default CustomerDealsRecord;
