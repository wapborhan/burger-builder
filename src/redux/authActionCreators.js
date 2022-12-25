import * as actionTypes from "./actionTypes";
import axios from "axios";

export const auth = (email, password) => (dispatch) => {
  const authData = {
    email: email,
    password: password,
    returnSecureToken: true,
  };
  const API_KEY = "AIzaSyAzxqtXqpUXIb2ZV8D21XQD4Ri3YzkZWaU";
  axios
    .post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
        API_KEY,
      authData
    )
    .then((response) => {
      console.log(response);
    });
};
