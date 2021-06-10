import React, { useEffect, useState } from "react";
//STYLE
import styled from "styled-components";
import { TableButton } from "../TableButton";
import { Link } from "react-router-dom";
//ANIMATION
import { motion } from "framer-motion";
import Line from "../Line";
import CustomerDealsRecord from "./CustomerDealsRecord";
import { useSelector, useDispatch } from "react-redux";
import {
  getAppartmentReservationsAction,
  getAllCustomerDataAction,
} from "../../actions/Actions";
import getAllApartmentsAction from "../../actions/getAllApartmentsAction";
import getCustomerDealsAction from "../../actions/getCustomerDealsAction";
const Dashboard = () => {
  const { apartments, apartmentReservalions } = useSelector(
    (state) => state.getAllApartments
  );
  const { allDeals } = useSelector((state) => state.getCustomerDeals);
  const { userData } = useSelector((state) => state.userDetails);
  const dispatch = useDispatch();
  const [myApartments, setMyApartments] = useState([]);
  useEffect(() => {
    dispatch(getAllApartmentsAction());
    dispatch(getAllCustomerDataAction());
    dispatch(getCustomerDealsAction());
  }, [dispatch]);

  useEffect(() => {
    let temp = apartments.filter(
      (apartment) => apartment.customer_id === userData.customer_id
    );
    setMyApartments(temp);
    console.log("temp", temp, apartments);
  }, [apartments, userData]);
  return (
    <StyledMotion>
      <Title>
        <h2>الصفحة الرئيسية</h2>
      </Title>

      <Contnents>
        <p></p>
        <Wrapper>
          <Title>
            <h4>طلباتك</h4>
            <h6>هنا يمكنك التحقق من طلباتك </h6>
          </Title>

          <Contnent>
            <TableWrapper>
              <Table>
                <thead>
                  <tr>
                    <th>رقم الشقة</th>
                    <th>المدينة </th>
                    <th>التاريخ </th>
                    <th>التكلفة </th>
                    <th>النوع </th>
                    <th>عرض</th>
                  </tr>
                </thead>
                {true && (
                  <tbody>
                    {allDeals.map(
                      ({
                        appartment_id,
                        city_name,
                        price,
                        sub_city_name,
                        date,
                        phoen,
                        type,
                      }) => (
                        <CustomerDealsRecord
                          td={[
                            <td>{appartment_id}</td>,
                            <td>
                              {city_name}-{sub_city_name}
                            </td>,
                            <td>{date}</td>,
                            <td>{price}</td>,
                            <td>
                              {type === "1"
                                ? "سكن عائلي"
                                : type === "2"
                                ? "سكن طلاب"
                                : type === "3"
                                ? "استوديو"
                                : null}
                            </td>,
                            <td>
                              <TableButton color="#174bad">
                                <Link
                                  to={`/apartmentDetails/${appartment_id}`}
                                ></Link>
                                <button>عرض</button>
                              </TableButton>
                            </td>,
                          ]}
                        />
                      )
                    )}
                  </tbody>
                )}
              </Table>
            </TableWrapper>
          </Contnent>
          <Title>
            <h4>الشقق الخاصة بك</h4>
            <h6>هنا يمكنك التحقق من عروضك </h6>
          </Title>
          <Contnent>
            <TableWrapper>
              <Table>
                <thead>
                  <tr>
                    <th>رقم الشقة</th>
                    <th>المدينة </th>
                    <th> تكلفة</th>
                    <th> نوع</th>
                    <th> الطلبات</th>
                    <th> عرض</th>
                  </tr>
                </thead>
                {true && (
                  <tbody>
                    {myApartments.map(
                      ({
                        appartment_id,
                        city_name,
                        sub_city_name,
                        price,
                        type,
                      }) => (
                        <CustomerDealsRecord
                          td={[
                            <td>{appartment_id}</td>,
                            <td>
                              {city_name}-{sub_city_name}
                            </td>,
                            <td>{price}</td>,
                            <td>
                              {type === "1"
                                ? "سكن عائلي"
                                : type === "2"
                                ? "سكن طلاب"
                                : type === "3"
                                ? "استوديو"
                                : null}
                            </td>,
                            <td>
                              <TableButton color="#19dd5a" subcolor="#2a924d">
                                <button
                                  onClick={() =>
                                    dispatch(
                                      getAppartmentReservationsAction(
                                        appartment_id
                                      )
                                    )
                                  }
                                >
                                  <span>الطلبات</span>
                                  <div className="icon">
                                    <i class="fas fa-eye"></i>{" "}
                                  </div>
                                </button>
                              </TableButton>
                            </td>,
                            <td>
                              <TableButton color="#174bad" subcolor="#1f4180">
                                <Link to={`/apartmentDetails/${appartment_id}`}>
                                  <button>
                                    <span>عرض</span>
                                    <div className="icon">
                                      <i class="fas fa-building"></i>{" "}
                                    </div>
                                  </button>
                                </Link>
                              </TableButton>
                            </td>,
                          ]}
                        />
                      )
                    )}
                  </tbody>
                )}
              </Table>
            </TableWrapper>
          </Contnent>
          {apartmentReservalions.length ? (
            <>
              <Title>
                <h4>
                  طلبات الشقة رقم {apartmentReservalions[0].appartment_id}
                </h4>
                <h6>هنا يمكنك التحقق طلبات الشقة </h6>
              </Title>
              <Contnent>
                <TableWrapper>
                  <Table>
                    <thead>
                      <tr>
                        <th>رقم الحجز</th>
                        <th>رقم الشقة</th>
                        <th> تاريخ</th>
                        <th>رقم صاحب الطلب </th>
                      </tr>
                    </thead>
                    <tbody>
                      {apartmentReservalions.map(
                        ({ reservation_id, appartment_id, date, phone }) => (
                          <CustomerDealsRecord
                            td={[
                              <td>{reservation_id}</td>,
                              <td>{appartment_id}</td>,
                              <td>{date}</td>,
                              <td>{phone}</td>,
                            ]}
                          />
                        )
                      )}
                    </tbody>
                  </Table>
                </TableWrapper>
              </Contnent>
            </>
          ) : null}
        </Wrapper>
      </Contnents>
    </StyledMotion>
  );
};
const StyledMotion = styled(motion.div)`
  box-shadow: 0 0 7px rgb(0 0 0 / 20%);
  padding: 1rem;
`;

const Contnents = styled.div`
  padding: 1rem;
  margin: 1rem 0;
  p {
    font-size: 1.2rem;
    color: #333;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  overflow: auto;
  padding: 0;
`;
const Title = styled.div`
  width: 100%;
  padding: 1em 0;
  h4 {
    font-size: 1rem;
    padding-top: 1em;
  }
  h6 {
    font-size: 0.8rem;
    color: #545d68;
    padding-bottom: 1em;
  }
`;
const Contnent = styled.div`
  overflow-x: auto;
  margin-bottom: 1rem;
`;
const TableWrapper = styled.div`
  overflow-x: auto;
`;
const Table = styled.table`
  width: 100%;
  box-shadow: 0 0 7px rgb(0 0 0 / 10%);
  border-collapse: collapse;
  margin: 2em 0;
  border-radius: 5px;
  overflow: hidden;
  table,
  th {
    font-size: 0.8rem;
  }
  th,
  td {
    width: auto;
    border-bottom: 1px solid #efefef;
    padding: 1rem;
    text-align: center;
  }
  td {
    color: #545d68;

    font-size: 0.9rem;
  }
  th {
    font-weight: normal;
    padding: 1rem 0;
  }
  tr:nth-child(even) {
    background-color: #dddddd;
  }
  tr:hover {
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;
const AcceptedTable = styled(Table)`
  tr,
  tr:nth-child(even) {
    background-color: lightgreen;
  }
  th {
    background-color: #1c9906;
  }
  td {
    color: #1c9906;
  }
`;
const DeclineTable = styled(Table)`
  tr,
  tr:nth-child(even) {
    background-color: #fae3e5;
  }
  th {
    background-color: #dc3545;
  }
  td {
    color: #dc3545;
  }
`;
export default Dashboard;
