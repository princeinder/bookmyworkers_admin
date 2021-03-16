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
import moment from "moment";
import { NavLink, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Loader from "../../../utils/loader/Loader";
import Toolbar from "../../../components/Toolbars/Toolbar";
import {
  getCustomFieldsList,
  deleteCustomField,
} from "../../../services/customFieldService";

const ManageCustomField = () => {
  const dispatch = useDispatch();

  const validationSchema = yup.object().shape({
    key: yup.string().required(),
    value: yup.string().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const [search, setSearch] = useState("");
  const userSignin = useSelector((state) => state.userSignin);
  const { authState } = userSignin;
  const customFieldData = useSelector((state) => state.customFieldData);
  const { loading, customFields } = customFieldData;

  useEffect(() => {
    dispatch(getCustomFieldsList(authState, search));
  }, [authState, search]);

  const onDeleteCustomField = (customfieldid) => {
    dispatch(deleteCustomField(authState, customfieldid));
  };
  const actionButton = {
    title: "Add New Field",
    type: "submit",
    link: "/admin/managecustomfields/add",
  };

  const onInputSearch = (search) => {
    setSearch(search);
  };

  return (
    <>
      <div className="content">
        <Loader isActive={loading} />
        <Row>
          <Col md="12">
            <Card>
              <CardBody>
                <div className="detail">
                  <Toolbar
                    search={search}
                    onInputSearch={onInputSearch}
                    csvData={""}
                    fileName="activities.csv"
                    filterActive={false}
                    actionButton={actionButton}
                  />
                  {customFields.length == 0 && !loading ? (
                    <div className="no-data-found">
                      <h6>No Data Found</h6>
                    </div>
                  ) : (
                    <Table responsive>
                      <thead className="text-primary">
                        <tr>
                          <th>#</th>
                          <th className="text-center">Key</th>
                          <th className="text-center">Label</th>
                          <th className="text-center">Created Date</th>
                          <th className="text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {customFields.map((customField, index) => (
                          <tr>
                            <td>{index + 1}</td>
                            <td className="text-center">
                              <div>{customField.key}</div>
                            </td>
                            <td className="text-center">
                              <div>{customField.label}</div>
                            </td>
                            <td
                              title={customField.createdAt}
                              className="td-width text-center"
                            >
                              {moment(customField.createdAt).format(
                                "DD-MM-YYYY"
                              )}
                            </td>
                            <td className="text-center td-width">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-trash-fill"
                                viewBox="0 0 16 16"
                                onClick={() =>
                                  onDeleteCustomField(customField._id)
                                }
                                className="delete"
                              >
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                              </svg>
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
    </>
  );
};

export default withRouter(ManageCustomField);
