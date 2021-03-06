import {
  SET_CURRENT_USER,
} from "./userTypes";

const INSIAL_STATE = {
  currentUser: null,

};

const userReducer = (state = INSIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isLoading: false,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
