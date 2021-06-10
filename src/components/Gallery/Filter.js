import React, { useEffect, useState } from "react";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
import Slider from "@material-ui/core/Slider";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllCitiesAction,
  getCityAppartmentsAction,
  getSub_CityAppartmentsAction,
  getAllSub_CitiesForCityAction,
  filterByPriceAction,
} from "../../actions/Actions";

import getAllApartmentsAction from "../../actions/getAllApartmentsAction";
const RentSpecs = () => {
  const [priceRange, setPriceRange] = useState([150, 500]);
  const dispatch = useDispatch();
  const { cities, subcities } = useSelector((state) => state.getAllCities);
  useEffect(() => {
    dispatch(getAllCitiesAction());
  }, [dispatch]);
  const getCityAppartments = (e) => {
    dispatch(getCityAppartmentsAction(e.target.value));
    dispatch(getAllSub_CitiesForCityAction(e.target.value));
  };
  const getSubCityAppartments = (e) => {
    dispatch(getSub_CityAppartmentsAction(e.target.value));
  };
  const filterByPrice = (e, val) => {
    dispatch(filterByPriceAction(val[0], val[1]));
  };
  return (
    <StyledFilter>
      <Price>
        <h3>Filter</h3>
      </Price>
      <Form>
        <Wrapper>
          <InputGroup>
            <label htmlFor="drop">المدينة</label>

            <select id="drop" name="drop" onChange={getCityAppartments}>
              <option value="null">اختر المدينة</option>
              {cities.length !== 0 &&
                cities.map((city) => {
                  return (
                    <option value={`${city.city_id}`}>{city.city_name}</option>
                  );
                })}
            </select>
          </InputGroup>
          <InputGroup>
            <label htmlFor="drop">المدينة الفرعية</label>

            <select id="drop" name="drop" onChange={getSubCityAppartments}>
              <option value={null}>اختر المدينة الفرعية</option>
              {subcities.length !== 0 &&
                subcities.map((subcities) => {
                  return (
                    <option value={`${subcities.sub_city_id}`}>
                      {subcities.sub_city_name}
                    </option>
                  );
                })}
            </select>
          </InputGroup>
          <InputGroup>
            <label htmlFor="drop">السعر</label>
            <Slider
              onChange={(e, newValue) => {
                setPriceRange(newValue);
              }}
              min={50}
              max={1200}
              value={priceRange}
              onChangeCommitted={filterByPrice}
            />
            <ValueSets>
              <span>{priceRange[1]}</span>
              <span>-</span>
              <span>{priceRange[0]}</span>
            </ValueSets>
          </InputGroup>
        </Wrapper>

        <Buttons>
          <button onClick={() => dispatch(getAllApartmentsAction())}>
            اعد الضبط
          </button>
        </Buttons>
      </Form>
    </StyledFilter>
  );
};
const StyledFilter = styled(motion.div)`
  height: auto;
  width: 20%;
  position: fixed;
  top: 10vh;
  display: flex;
  flex-direction: column;
  background: #f7f7f7;
  transition: 0.5s all ease;
`;
const Price = styled(motion.div)`
  height: 8vh;
  background: #1d62e0;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 2px;
`;
const Form = styled(motion.div)`
  display: flex;
  flex-direction: column;

  padding: 2rem;
  top: 0;
  div {
    padding-top: 1rem;
  }
`;
const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-around;
  label {
    font-size: 0.8rem;
    color: black;
    font-weight: bold;
    width: 100%;

    padding: 0.5rem 0;
  }
  select,
  input {
    padding: 0.5rem;
    color: gray;
    &:focus {
      outline-color: rgb(16, 106, 196);
    }
  }
`;

const Wrapper = styled.div`
  margin-bottom: 2rem;
`;
const ValueSets = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: nowrap;
  span {
    flex: 0 0 10%;
    width: 5ch;
    background: white;
    font-weight: 600;
    padding: 0.5rem;
    text-align: center;
  }
  span:nth-of-type(2) {
    background: transparent;
  }
`;

const Buttons = styled(motion.div)`
  padding: 1rem;
  margin: 0 auto;
  button {
    padding: 1rem;
    border: none;
    color: white;
    font-weight: bold;
    background: #1d62e0;
    font-size: 1.1rem;
    transition: 0.2s all ease-in;
  }
`;
export default RentSpecs;
