import * as actionTypes from "./actionTypes";
import axios from "axios";

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    payload: {
      token: token,
      userId: userId,
    },
  };
};

export const authLoading = (isLoading) => {
  return {
    type: actionTypes.AUTH_LOADING,
    payload: isLoading,
  };
};

export const auth = (email, password, mode) => (dispatch) => {
  dispatch(authLoading(true));
  const authData = {
    email: email,
    password: password,
    returnSecureToken: true,
  };

  let authUrl = null;

  if (mode === "Sign Up") {
    authUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
  } else {
    authUrl =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
  }

  const API_KEY = "AIzaSyAzxqtXqpUXIb2ZV8D21XQD4Ri3YzkZWaU";
  axios
    .post(authUrl + API_KEY, authData)
    .then((response) => {
      dispatch(authLoading(false));
      localStorage.setItem("token", response.data.idToken);
      localStorage.setItem("userId", response.data.localId);
      const expirationtime = new Date(
        new Date().getTime() + response.data.expiresIn * 1000
      );
      localStorage.setItem("expire", expirationtime);

      dispatch(authSuccess(response.data.idToken, response.data.localId));

      console.log(response);
    })
    .catch((err) => {
      dispatch(authLoading(false));
      console.log(err);
    });
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("expire");
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const authCheck = () => (dispatch) => {
  const token = localStorage.getItem("token");

  if (!token) {
    // Logout
    dispatch(logout());
  } else {
    const expirationtime = new Date(localStorage.getItem("expire"));
    if (expirationtime < new Date()) {
      // Logoout
      dispatch(logout());
    } else {
      const userId = localStorage.getItem("userId");
      dispatch(authSuccess(token, userId));
    }
  }
};
