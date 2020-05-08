import {
    REGISTER_SUCCESS,
    REGISTER_FAILED,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT,
  } from '../actors/types';
  
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
  };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case REGISTER_SUCCESS:
      case LOGIN_SUCCESS:
        localStorage.setItem('token', payload.token);
        return {
          ...state,
          ...payload,
          isAuthenticated: true,
          loading: false,
        };
      case LOGOUT:
      case LOGIN_FAILED:
      case AUTH_ERROR:
      case REGISTER_FAILED:
        localStorage.removeItem('token');
        return {
          ...state,
          token: null,
          isAuthenticated: false,
          loading: false,
        };
      case USER_LOADED:
        return {
          ...state,
          isAuthenticated: true,
          loading: false,
          user: payload,
        };
      default:
        return state;
    }
  }
  