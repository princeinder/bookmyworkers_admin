import axios from "axios";
import LocalStorageService from "../services/localstorageService";
import {
  USER_SIGNIN_LOADING,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_ERROR,
  USER_LOGOUT,
} from "../utils/constants/userConstants";
import { env } from "../environment/environment";

const signin = (email, password) => async (dispatch) => {
  dispatch({
    type: USER_SIGNIN_LOADING,
    payload: { email, password },
  });
  try {
    const { data } = await axios.post(`${env}/admin/user/signin`, {
      email,
      password,
    });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data.data.accessToken });
    LocalStorageService._setAccessToken(data.data.accessToken);
  } catch (error) {
    dispatch({ type: USER_SIGNIN_ERROR, payload: error.response.data.message });
  }
};

const logout =() =>  async (dispatch) =>{
  LocalStorageService.clearToken();
  dispatch({type:USER_LOGOUT})
}

export { signin,logout };
