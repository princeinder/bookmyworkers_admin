import axios from "axios";
import LocalStorageService from "../services/localstorageService";
import {
  USER_SIGNIN_LOADING,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_ERROR,
} from "../utils/constants/userConstants";
import { env } from "../environment/environment";

const getCompaniesList = (email, password) => async (dispatch) => {
  dispatch({
    type: USER_SIGNIN_LOADING,
    payload: { email, password },
  });
  try {
    const { data } = await axios.post(`${env}/admin/company/list`, {
      email,
      password,
    });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data.data.accessToken });
    LocalStorageService._setAccessToken(data.data.accessToken);
  } catch (error) {
    dispatch({ type: USER_SIGNIN_ERROR, payload: error.response.data.message });
  }
};


export { getCompaniesList };
