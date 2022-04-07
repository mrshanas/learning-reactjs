import API from "../../api";

export const showProducts = () => (dispatch: any) => {
  API.get("/products/")
    .then((res) => dispatch({ type: "SHOW_PRODUCTS", payload: res.data }))
    .catch((err) => console.error(err));
};
