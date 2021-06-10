import React, { useEffect } from "react";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
import Body from "../components/CarDetails/Body";
import { useHistory, useLocation, useParams } from "react-router-dom";
import Lottie from "react-lottie";
import * as loading from "../lottie/loading.json";
import { useSelector, useDispatch } from "react-redux";
import getAllApartmentsAction from "../actions/getAllApartmentsAction";
import getApartmentPicAction from "../actions/getApartmentPicAction";
const ApartmentDetails = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { pic } = useSelector((state) => state.ApartmentPic);
  const { apartments } = useSelector((state) => state.getAllApartments);
  const { id } = useParams();
  let apartment = apartments.filter((ap) => ap.appartment_id === id)[0];
  useEffect(() => {
    dispatch(getAllApartmentsAction());
    dispatch(getApartmentPicAction(id));
    console.log("x");
  }, [dispatch]);
  return (
    <StyledGallrey>
      {apartment ? <Body apartment={apartment} pic={pic} /> : null}
    </StyledGallrey>
  );
};

const StyledGallrey = styled(motion.div)`
  height: auto;
  width: 100%;
  margin-top: 2rem;
  padding: 4rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export default ApartmentDetails;
