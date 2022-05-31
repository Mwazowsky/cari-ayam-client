import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerStart,
  registerSuccess,
  registerFailure,
  orderStart,
  orderSuccess,
  orderFailure,
} from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};

export const addOrder = async (dispatch, orders) => {
  dispatch(orderStart());
  try {
    const res = await userRequest.post("/orders/", orders);
    dispatch(orderSuccess(res.data));
  } catch (err) {
    dispatch(orderFailure());
  }
};
