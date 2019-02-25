import axios from "axios";

export const action = () => {
  return dispatch => {
    dispatch({ type: "FETCH_PROMO_START" });

    axios
      .get("https://dev.pestadiskon.com/api/Discounts")
      .then(response => {
        dispatch({ type: "RECEIVE_PROMO", payload: response.data });
      })
      .catch(err => {
        dispatch({ type: "FETCH_PROMO_ERROR", payload: err });
      });
  };
};
