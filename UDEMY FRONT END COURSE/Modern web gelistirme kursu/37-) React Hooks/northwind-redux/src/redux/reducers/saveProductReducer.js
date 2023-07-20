import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function saveProductReducer(
  state = initialState.savedProduct,
  action
) {
  switch (action) {
    case actionTypes.CREATE_PRODUCT_SUCCESS:
      return action.payload;
    case actionTypes.UPDATE_PRODUCT_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
