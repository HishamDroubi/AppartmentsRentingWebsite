import React, { useEffect } from "react";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
import Filter from "../components/Gallery/Filter";
import Body from "../components/Gallery/Body";
import { useHistory, useLocation } from "react-router-dom";
import Lottie from "react-lottie";
import * as loading from "../lottie/loading.json";
import { useSelector, useDispatch } from "react-redux";
import getAllApartmentsAction from "../actions/getAllApartmentsAction";
import { getCityAppartmentsAction } from "../actions/Actions";
import { useParams } from "react-router-dom";

const Gallery = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      dispatch(getCityAppartmentsAction(id));
    } else {
      dispatch(getAllApartmentsAction());
    }
  }, [dispatch, id]);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <StyledGallrey>
      <Filter />
      <Body />
    </StyledGallrey>
  );
};

const StyledGallrey = styled(motion.div)`
  height: 100%;
  width: 100%;
  margin-top: 2rem;
  padding: 2rem;
  min-height: 100vh;
  display: flex;
`;

export default Gallery;
