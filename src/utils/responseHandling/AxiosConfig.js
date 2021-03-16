import axios from "axios";
import LocalStorageService from "../../services/";
import { env } from "../../environment/environment";
import { toast } from "react-toastify";

const AxiosConfig = () => {
  const localStorageService = LocalStorageService.getService();

  axios.interceptors.request.use(
    (config) => {
      const token = localStorageService.getAccessToken();
      if (token) {
        config.headers["Authorization"] = token;
      }
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    function (error) {
      const originalRequest = error.config;
      if (error.response.status === 400) {
        toast.error(error.response.data.message);
      }
      if (
        error.response.status === 401 &&
        originalRequest.url === `${env}/v1/admin/token`
      ) {
        //  history.push("admin/login");
        return Promise.reject(error);
      }

      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const refreshToken = localStorageService.getRefreshToken();
        return axios
          .post("/admin/token", {
            refresh_token: refreshToken,
          })
          .then((res) => {
            if (res.status === 201) {
              localStorageService._setAccessToken(res.data.accessToken);
              axios.defaults.headers.common[
                "Authorization"
              ] = localStorageService.getAccessToken();
              return axios(originalRequest);
            }
          });
      }
      return Promise.reject(error);
    }
  );
};

export default AxiosConfig;
