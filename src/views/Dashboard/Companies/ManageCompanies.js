import React, { useEffect, useState } from "react";
import "../../../assets/scss/manage-post.scss";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Table,
} from "reactstrap";
import { NavLink, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getUserList,
  deleteUser,
  activeDeactiveUser,
  searchUser,
} from "services/userService";
import Loader from "../../../utils/loader/Loader";
import Toolbar from "../../../components/Toolbars/Toolbar";
import { getCompaniesList } from "services/companyService";

const ManageUser = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { authState } = userSignin;
  const companyData = useSelector((state) => state.companiesList);
  const { loading, companies } = companyData;

  useEffect(() => {
    dispatch(getCompaniesList(authState, search));
  }, [authState, search]);

  const onDeleteUser = (userid) => {
    dispatch(deleteUser(authState, userid));
  };

  const onActiveDeactive = (status, userid) => {
    dispatch(activeDeactiveUser(authState, status, userid));
  };

  const onInputSearch = (search) => {
    setSearch(search);
  };

  return (
    <>
      <div className="content">
        <Loader isActive={!loading} />
        <Row>
          <Col md="12">
            <Card>
              <CardBody>
                <div className="detail">
                  <Toolbar
                    search={search}
                    onInputSearch={onInputSearch}
                    csvData={companies}
                    filterActive={true}
                    fileName="users.csv"
                  />
                  {companies.length == 0 && !loading ? (
                    <div className="no-data-found">
                      <h6>No Companies Found</h6>
                    </div>
                  ) : (
                    <Table responsive>
                      <thead className="text-primary">
                        <tr>
                          <th>#</th>
                          <th className="text-center">Image</th>
                          <th className="text-center">Name</th>
                          <th className="td-width text-center">Company</th>
                          <th className="text-center td-width"> Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {companies.map((company, index) => (
                          <tr>
                            <td>{index + 1}</td>
                            <td>
                              <figure className="circle">
                                <img
                                  src={
                                    company.baseProfilePic
                                      ? "http://www.appgrowthcompany.com:6030" +
                                      company.baseProfilePic
                                      : "/assets/img/profile1.png"
                                  }
                                  className="profile"
                                ></img>
                              </figure>
                            </td>
                            <td className="text-center td-width">
                              <div>{company.name}</div>
                              <div>{company.email}</div>
                              <div>{company.countryCode + company.phoneNumber}</div>
                            </td>

                            <td
                              title={company.address}
                              className="td-width text-center"
                            >
                              {company.address}
                            </td>
                            <td
                              title={company.interest
                                .map((inter) => inter.name)
                                .join(" , ")}
                            >
                              <span className="hobbies">
                                {company.interest
                                  .map((inter) => inter.name)
                                  .join(" , ")}
                              </span>
                            </td>

                            <td className="text-center td-width">
                              <NavLink
                                to={"/admin/manageuser/viewuser/" + company._id}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-eye-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                                </svg>
                              </NavLink>
                              <NavLink
                                to={"/admin/manageuser/edituser/" + company._id}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-pencil-fill"
                                  viewBox="0 0 16 16"
                                  className="edit"
                                >
                                  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                </svg>
                              </NavLink>

                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-trash-fill"
                                viewBox="0 0 16 16"
                                onClick={() => onDeleteUser(company._id)}
                                className="delete"
                              >
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                              </svg>

                              <NavLink
                                to={"/admin/manageuser/view/" + company._id}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-clock-history"
                                  viewBox="0 0 16 16"
                                  className="history"
                                >
                                  <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
                                  <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
                                  <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
                                </svg>
                              </NavLink>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  )}
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
      {/* <Pagination /> */}
    </>
  );
};

export default withRouter(ManageUser);
