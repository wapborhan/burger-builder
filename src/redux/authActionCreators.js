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

export const auth = (email, password, mode) => (dispatch) => {
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
  axios.post(authUrl + API_KEY, authData).then((response) => {
    localStorage.setItem("token", response.data.idToken);
    localStorage.setItem("userId", response.data.localId);
    const expirationtime = new Date(
      new Date().getTime() + response.data.expiresIn * 1000
    );
    localStorage.setItem("expire", expirationtime);

    dispatch(authSuccess(response.data.idToken, response.data.localId));

    console.log(response);
  });
};

export const authCheck = () => (dispatch) => {
  const token = localStorage.getItem("token");

  if (!token) {
    // Logout
  } else {
    const expirationtime = new Date(localStorage.getItem("expire"));
    if (expirationtime < new Date()) {
      // Logoout
    } else {
      const userId = localStorage.getItem("userId");
      dispatch(authSuccess(token, userId));
    }
  }
};
