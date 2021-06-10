// import React, { useState, useEffect } from "react";
// //styling
// import styled from "styled-components";
// import { motion } from "framer-motion";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// const RentSpecs = ({ carData, isLoadingCarData }) => {
//   const { userStatus } = useSelector((state) => state.userStatus);
//   const { rentResponse } = useSelector((state) => state.rentCar);
//   const { wishlist, car_details, styles } = carData;
//   const dispatch = useDispatch();

//   const [data, setData] = useState({
//     cost: car_details.cost,
//     pick_up: null,
//     drop_off: null,
//     car_style_id: "",
//   });
//   const [sending, setSending] = useState(false);

//   const dataHandler = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };
//   const EmptyFeild = () => {
//     document.querySelectorAll("input").forEach((input) => (input.value = ""));
//   };
//   const submitHandler = (e) => {
//     e.preventDefault();
//     e.target.checkValidity();
//     setSending((p) => true);
//   };
//   useEffect(() => {
//     if (rentResponse === true) {
//       setTimeout(() => {
//         EmptyFeild();
//         setData({
//           ...data,
//           cost: car_details.cost,
//           pick_up: "",
//           drop_off: "",
//           car_style_id: "",
//         });
//         dispatch(carDataAction(car_details.car_id));
//         dispatch({ type: "LOADING_RENTING_REQUEST" });
//         setSending((p) => false);
//       }, 500);
//     }
//   }, [rentResponse]);
//   return (
//     <StyledFilter>
//       <Price>
//         <h3>$340 </h3>
//         {userStatus && wishlist.length !== 0 && (
//           <i
//             onClick={() => updateWishList("remove", car_details.car_id)}
//             className="fas fa-heart"
//           ></i>
//         )}{" "}
//         {userStatus && wishlist.length === 0 && (
//           <i
//             onClick={() => updateWishList("add", car_details.car_id)}
//             className="far fa-heart"
//           ></i>
//         )}
//       </Price>

//       <Form onSubmit={submitHandler}>
//         <Wrapper>
//           <h3>تاريخ الحجز</h3>
//           <InputGroup>
//             <label htmlFor="pick-up-date">من</label>
//             <input
//               type="date"
//               name="start_date"
//               onChange={dataHandler}
//               required
//             />
//           </InputGroup>
//           <InputGroup>
//             <label htmlFor="drop-off-date">الى</label>
//             <input
//               type="date"
//               name="end_date"
//               onChange={dataHandler}
//               required
//             />
//           </InputGroup>
//         </Wrapper>
//         {userStatus && !isLoadingCarData && (
//           <>
//             {!sending && (
//               <Buttons>
//                 <button type="submit">Book this car</button>
//               </Buttons>
//             )}{" "}
//             {sending && (
//               <Buttons>
//                 <button
//                   style={{ pointerEvents: "none", backgroundColor: "gray" }}
//                   type="submit"
//                 >
//                   Sending
//                 </button>
//               </Buttons>
//             )}
//           </>
//         )}
//         {!userStatus && (
//           <>
//             <StyledLink to="/login">سجل الدخول من اجل الحجز</StyledLink>
//           </>
//         )}
//       </Form>
//     </StyledFilter>
//   );
// };
// const StyledFilter = styled(motion.div)`
//   height: 100%;

//   flex: 1 1 30%;
//   display: flex;
//   flex-direction: column;
//   background: #f7f7f7;
// `;
// const Price = styled(motion.div)`
//   height: 8vh;
//   background: #1d62e0;
//   color: white;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;
//   i {
//     z-index: 10;
//     position: absolute;
//     left: 0;
//     font-size: 2rem;
//     color: red;
//     pointer-events: all;
//     cursor: pointer;
//     left: 7px;
//     bottom: 12px;
//     &::after {
//       font-family: sans-serif;
//       font-weight: normal;
//       content: "المفضلة";
//       background: black;
//       color: white;
//       font-size: 0.5em;
//       color: white;
//       border-radius: 10px;
//       position: absolute;
//       padding: 0.5em;
//       left: -5%;
//       bottom: 100%;
//       transform: scale(0);
//       transition: 0.3s all ease;
//       transform-origin: bottom;
//     }
//     &:hover::after {
//       transform: scale(1);
//     }
//   }
// `;
// const Form = styled(motion.form)`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 2rem 4rem;
//   div {
//     padding-top: 0.5rem;
//   }
// `;
// const InputGroup = styled.div`
//   height: auto;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: space-around;

//   label {
//     font-size: 0.9rem;
//     color: black;
//     font-weight: bold;
//     width: 100%;
//     padding: 0.5rem 0;
//   }
//   select,
//   input {
//     width: 110%;
//     padding: 0.5rem;
//     color: gray;
//     &:focus {
//       outline-color: rgb(16, 106, 196);
//     }
//   }
// `;
// const InputCheck = styled(InputGroup)`
//   flex-direction: row;
//   padding-top: 0.5rem;
//   align-items: center;
//   justify-content: space-between;
//   border-bottom: 1px solid #ddd;
//   input[type="checkbox"] {
//     margin-right: 5px;
//     width: auto;
//   }
//   label {
//     width: auto;
//     font-size: 0.7rem;
//     color: black;
//     font-weight: normal;
//   }
//   div {
//     padding: 0.5rem 0;
//     span {
//       font-size: 0.8rem;
//       color: #174bad;
//       font-weight: bolder;
//     }
//   }
// `;
// const Wrapper = styled.div`
//   width: 100%;
//   margin-bottom: 2rem;
// `;

// const Buttons = styled(motion.div)`
//   padding: 1rem;
//   width: 100%;

//   span,
//   button {
//     width: 100%;
//     padding: 1rem;
//     border: none;
//     color: white;
//     font-weight: bold;
//     background: #1d62e0;
//     font-size: 1.1rem;
//   }
// `;
// const StyledLink = styled(Link)`
//   width: 100%;
//   padding: 1rem;
//   border: none;
//   color: white;
//   font-weight: bold;
//   background: #1d62e0;
//   font-size: 1.1rem;
//   text-decoration: none;
//   text-align: center;
// `;
// export default RentSpecs;
