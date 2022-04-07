import API from "../../api";

export const showSales = () => (dispatch: any) => {
  API.get("/sales/")
    .then(({ data }) => dispatch({ type: "SHOW_SALES", payload: data }))
    .catch((err) => console.error(err));
};
