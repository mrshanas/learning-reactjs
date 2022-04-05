export const showProducts = () => (dispatch: any) => {
  return dispatch({
    type: "SHOW_PRODUCTS",
    payload: "clothes",
  });
};
