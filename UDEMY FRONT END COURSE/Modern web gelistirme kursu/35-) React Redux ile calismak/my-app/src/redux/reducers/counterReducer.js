import * as actionTypes from "../actions/actionTypes";

const counterReducer = (state = 0, action) => {
  // Iki adet parametremiz var
  // 1-) state
  // 2-) action = butun reducer lar action icerip icermedigine bakicak
  let newState;

  switch (action.type) {
    case actionTypes.INCREASE_COUNTER:
      return (newState = state + action.payload);
    case actionTypes.DECREASE_COUNTER:
      return (newState = state - action.payload);
    case actionTypes.INCREASE_BY_TWO_COUNTER:
      // eslint-disable-next-line no-unused-vars
      return (newState = state + action.payload);

    default:
      return state;
  }
};

export default counterReducer;

// reducer in icersinde bir api ye bir veritabanina baglanilmaz
// reducer in icerisinde tamamen basit bir [ state ] yonetimi isleri yapilir