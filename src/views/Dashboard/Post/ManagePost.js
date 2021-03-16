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
// import { getPostList } from "../../../services/postService";

const ManagePost = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { authState } = userSignin;
  const postData = useSelector((state) => state.postData);
  const { loading, posts } = postData;

  // useEffect(() => {
  //   dispatch(getPostList(authState, search));
  // }, [authState, search]);

  const onDeletePost = (activityid) => {
    dispatch(deletePost(authState, activityid));
  };

  const onInputSearch = (search) => {
    setSearch(search);
  };
  const actionButton = {
    title: "Add New Post",
    link: "/admin/managepost/add",
  };
  const openActivityModal = (id) => {};
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
                    csvData={posts}
                    fileName="activities.csv"
                    filterActive={false}
                    actionButton={actionButton}
                  />
                  {posts.length == 0 && !loading ? (
                    <div className="no-data-found">
                      <h6>No Posts Found</h6>
                    </div>
                  ) : (
                    <Table responsive>
                      <thead className="text-primary">
                        <tr>
                          <th>#</th>
                          <th className="text-center">Post Name</th>
                          <th className="text-center">UserName</th>
                          <th className="text-center"> Post Type</th>
                          <th className="text-center">Address</th>
                          <th className="text-center">Interested</th>
                          <th className="text-center td-width"> Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {posts.map((post, index) => (
                          <tr>
                            <td>{index + 1}</td>
                            <td className="text-center">
                              <div>{post.postType}</div>
                            </td>
                            <td className="text-center">
                              <div>{post.user.name}</div>
                            </td>
                            <td className="text-center">
                              <div>
                                {post.isActive ? (
                                  <Badge color="primary">Live</Badge>
                                ) : (
                                  <Badge color="warning">Expired</Badge>
                                )}
                              </div>
                            </td>
                            <td
                              title={post.location}
                              className="td-width text-center"
                            >
                              {post.location}
                            </td>
                            <td className="text-center">
                              <div className="bage-icon">
                                <i
                                  class="bi bi-people-fill"
                                  onClick={() =>
                                    openActivityModal(activity._id)
                                  }
                                >
                                  <Badge color="warning">
                                    {activity.interested.length}
                                  </Badge>
                                </i>
                              </div>

                              {/* {activity.interested.map((user) => (
                                <figure className="circle">
                                  <img
                                    src={
                                      user.baseProfilePic
                                        ? "http://www.appgrowthcompany.com:6030" +
                                          user.baseProfilePic
                                        : "/assets/img/profile1.png"
                                    }
                                    className="profile"
                                  ></img>
                                </figure>
                              ))} */}
                            </td>
                            <td className="text-center td-width">
                              {/* <NavLink
                                to={
                                  "/admin/manageuser/viewuser/" + activity._id
                                }
                              > */}
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
                              {/* </NavLink> */}
                              {/* <NavLink
                                to={
                                  "/admin/manageuser/edituser/" + activity._id
                                }
                              > */}
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
                              {/* </NavLink> */}

                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-trash-fill"
                                viewBox="0 0 16 16"
                                //  /   onClick={() => onDeleteActivity(activity._id)}
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

export default withRouter(ManagePost);
