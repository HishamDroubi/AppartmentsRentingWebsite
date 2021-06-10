import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { makeFormData } from "../../../util";
import {
  getAllCitiesAction,
  getCityAppartmentsAction,
  getSub_CityAppartmentsAction,
  getAllSub_CitiesForCityAction,
  addAppartmentAction,
} from "../../../actions/Actions";
import swal from "sweetalert";
const WizardFormFirstPage = (props) => {
  const ref = useRef();
  const [data, setData] = useState({});
  const [files, setFiles] = useState({});
  const { added } = useSelector((state) => state.AddApartment);
  const setDataHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const setFileHandler = (e) => {
    setFiles({ ...files, [e.target.name]: e.target.files[0] });
  };
  useEffect(() => {
    if (added === "1") {
      swal("تمضت الاضافة!", "", "success");
      ref.current.reset();
    }
  }, [added]);

  const { cities, subcities } = useSelector((state) => state.getAllCities);
  const dispatch = useDispatch();
  const [state, setstate] = useState([]);
  const addFeild = () => {
    setstate([
      ...state,
      <FormGroup style={{ flex: "50%" }}>
        <FormField
          type="file"
          name={`picture${state.length}`}
          className="form__field"
          onChange={setFileHandler}
        />
      </FormGroup>,
    ]);
  };

  useEffect(() => {
    if (state.length < 5) {
      addFeild();
    }
  }, [files]);
  useEffect(() => {
    dispatch(getAllCitiesAction());
  }, [dispatch]);
  const getCityAppartments = (e) => {
    dispatch(getAllSub_CitiesForCityAction(e.target.value));
  };
  const addApartment = (e) => {
    e.preventDefault();
    e.target.checkValidity();
    let formData = makeFormData(data);
    let formDatafiles = makeFormData(files);

    for (let pair of formDatafiles.entries()) {
      console.log(pair[0], pair[1]);
    }
    for (let pair of formDatafiles.entries()) {
      formData.append(pair[0], pair[1]);
    }
    dispatch(addAppartmentAction(formData));
  };
  return (
    <Form onSubmit={addApartment} ref={ref}>
      <FormGroup>
        <FormField
          type="text"
          className="form__field"
          name="title"
          onChange={setDataHandler}
          required
        />
        <label className="form__label">عنوان العرض</label>
      </FormGroup>
      <FormGroup>
        <FormField
          type="number"
          name="floor_number"
          className="form__field"
          onChange={setDataHandler}
          required
          max="20"
          min="-1"
        />
        <label className="form__label">الطابق</label>
      </FormGroup>
      <FormGroup>
        <FormField
          type="number"
          className="form__field"
          name="number_of_rooms"
          onChange={setDataHandler}
          required
          max="20"
          min="1"
        />
        <label className="form__label">عدد الغرف</label>
      </FormGroup>
      <FormGroup>
        <FormField
          type="number"
          className="form__field"
          name="price"
          onChange={setDataHandler}
          required
        />
        <label className="form__label">السعر</label>
      </FormGroup>
      <FormGroup>
        <InputGroup>
          <select
            style={{ display: "block", margin: "1rem 0" }}
            onChange={(e) => {
              getCityAppartments(e);
              setDataHandler(e);
            }}
            name="city_id"
            required
          >
            <option value={null}>اختر المدينة </option>
            {cities.length &&
              cities.map((city) => (
                <option value={`${city.city_id}`}>{city.city_name}</option>
              ))}
          </select>
        </InputGroup>
        <label className="form__label">المدينة</label>
      </FormGroup>
      <FormGroup>
        <InputGroup>
          <select
            style={{ display: "block", margin: "1rem 0" }}
            onChange={setDataHandler}
            required
            name="sub_city_id"
          >
            <option value={null}>اختر الحي </option>
            {subcities.length &&
              subcities.map((city) => (
                <option value={`${city.sub_city_id}`}>
                  {city.sub_city_name}
                </option>
              ))}
          </select>
        </InputGroup>
        <label className="form__label">الحي</label>
      </FormGroup>
      <FormGroup style={{ width: "110%" }}>
        <InputGroup>
          <select
            style={{ display: "block", margin: "1rem 0" }}
            name="type"
            required
            onChange={setDataHandler}
          >
            <option value={null}>اختر نوع الشقة</option>
            <option value="1">سكن عائلي</option>
            <option value="2">سكن طلاب</option>
            <option value="3">استوديو</option>
          </select>
        </InputGroup>
        <label className="form__label">النوع</label>
      </FormGroup>
      <FormGroup style={{ flex: "100%" }}>
        <textarea
          style={{ padding: "1rem" }}
          rows="10"
          cols="126"
          placeholder="الوصف"
          name="description"
          onChange={setDataHandler}
          required
        ></textarea>
        <label className="form__label"></label>
      </FormGroup>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>{state}</div>
        <ButtonPrimary style={{ alignSelf: "start" }} type="submit">
          اضف الشقة
        </ButtonPrimary>
      </div>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const FormField = styled.input`
  width: 95%;
  height: 100%;
  border: 0;
  border-bottom: 1px solid black;
  outline: 0;
  font-size: 1rem;
  color: black;
  padding: 1rem 0;
  background: transparent;
  transition: border-color 0.2s;
  &::placeholder {
    color: transparent;
  }
  &:placeholder-shown ~ .form__label {
    font-size: 1rem;
    cursor: text;
    top: 20px;
  }

  &:focus {
    ~ .form__label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 0.8rem;
      color: rgb(17, 106, 196);
      font-weight: 700;
    }
  }
  &:required,
  &:invalid {
    box-shadow: none;
  }
  @media (max-width: 310px) {
    width: 140%;
  }
`;
const FormGroup = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 50%;
  .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 0.8rem;
    color: $gray;
  }
`;
const Buttons = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: flex-start;
  @media (max-width: 200px) {
    flex-wrap: wrap;
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
    width: 95%;
    &:focus {
      outline-color: rgb(16, 106, 196);
    }
  }
`;
const ButtonPrimary = styled.button`
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2em;
  margin: 2em 0;
  background: #174bad;
  font-size: 1rem;
  text-align: center;
  color: black;
  font-weight: bold;
  cursor: pointer;
  border-radius: 1rem;
  transition: 0.2s;
  span {
    margin-right: 1em;
  }
  @media (max-width: 340px) {
    font-size: 0.8rem;
  }
`;
const ButtonCanel = styled(ButtonPrimary)`
  background: red;
  margin-right: 1rem;
`;

export default WizardFormFirstPage;
