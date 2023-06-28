const GeneralReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOGIN":
      return { ...state, isLogged: action.payload };
    default:
      return state;
  }
};

export default GeneralReducer;
