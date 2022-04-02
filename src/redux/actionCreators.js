import * as actionTypes from "./actionTypes";
import axios from "axios";

export const addIngredient = (igtype) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    payload: igtype,
  };
};

export const removeIngredient = (igtype) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    payload: igtype,
  };
};

export const updatePurchasable = () => {
  return {
    type: actionTypes.UPDATE_PURCHASABLE,
  };
};

export const resetIngredients = () => {
  return {
    type: actionTypes.RESET_INGREDIENT,
  };
};

export const loadOrdesr = (orders) => {
  return {
    type: actionTypes.LOAD_ORDERS,
    payload: orders,
  };
};

export const orderLoafFaild = () => {
  return {
    type: actionTypes.ORDER_LOAD_FAILD,
  };
};

export const fetchOrders = () => (dispatch) => {
  axios
    .get(
      "https://burger-builder-b6aa1-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json"
    )
    .then((res) => {
      dispatch(loadOrdesr(res.data));
    })
    .catch((err) => {
      dispatch(orderLoafFaild());
    });
};
