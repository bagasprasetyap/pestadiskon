const initState = { promos: [], error: null };

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_PROMO_START":
      console.log("start data promo", action);
      return state;
    case "FETCH_PROMO_ERROR":
      console.log("error data promo", action.payload);
      return {
        ...state,
        error: action.payload
      };
    case "RECEIVE_PROMO":
      console.log("receive data promo", action.payload);
      return {
        ...state,
        promos: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
