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
  Badge,
} from "reactstrap";
import { NavLink, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../../utils/loader/Loader";
import Toolbar from "../../../components/Toolbars/Toolbar";
import {
  getActivityList,
  deleteActivity,
  activeDeactiveActivity,
} from "../../../services/activityService";

const ManageActivity = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { authState } = userSignin;
  const activityData = useSelector((state) => state.activityData);
  const { loading, activities } = activityData;

  useEffect(() => {
    dispatch(getActivityList(authState, search));
  }, [authState, search]);

  const onDeleteActivity = (activityid) => {
    dispatch(deleteActivity(authState, activityid));
  };

  const onActiveDeactive = (status, activityid) => {
    dispatch(activeDeactiveActivity(authState, status, activityid));
  };

  const onInputSearch = (search) => {
    setSearch(search);
  };
  const actionButton = {
    title: "Add New Activity",
    link: "/admin/manageactivity/add",
  };
  const openActivityModal = (id) => {};
  console.log(activities, "activities");
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
                    onInputSearch={onInputSearch}
                    csvData={activities}
                    fileName="activities.csv"
                    filterActive={false}
                    actionButton={actionButton}
                  />
                  {activities.length == 0 && !loading ? (
                    <div className="no-data-found">
                      <h6>No Activities Found</h6>
                    </div>
                  ) : (
                    <Table responsive>
                      <thead className="text-primary">
                        <tr>
                          <th>#</th>
                          <th className="text-center">Activity Name</th>
                          <th className="text-center td-width">
                            Sub Activities
                          </th>
                          <th className="text-center "> Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {activities.map((activity, index) => (
                          <tr>
                            <td>{index + 1}</td>
                            <td className="text-center">
                              <div>{activity.activityName}</div>
                            </td>
                            <td
                              className="text-center td-width"
                              title={
                                activity.subActivity.length
                                  ? activity.subActivity
                                      .map((subAct) => subAct.subActivityName)
                                      .join(" , ")
                                  : "-"
                              }
                            >
                              <div>
                                {activity.subActivity.length
                                  ? activity.subActivity
                                      .map((subAct) => subAct.subActivityName)
                                      .join(" , ")
                                  : "-"}
                              </div>
                            </td>
                            <td className="text-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-trash-fill"
                                viewBox="0 0 16 16"
                                onClick={() => onDeleteActivity(activity._id)}
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
      {/* <Pagination /> */}
    </>
  );
};

export default withRouter(ManageActivity);
