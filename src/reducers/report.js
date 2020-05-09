import { CREATE_REPORT, REPORT_ERROR } from '../actors/types';

const initialState = [];

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_REPORT:
      return [payload];
    case REPORT_ERROR:
      return [payload];
    default:
      return state;
  }
}
