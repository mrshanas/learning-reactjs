import API from "../../api";

interface product {
  name: string;
  price: string;
  quantity: number;
  category: number;
}

export const showProducts = () => (dispatch: any) => {
  API.get("/products/")
    .then((res) => dispatch({ type: "SHOW_PRODUCTS", payload: res.data }))
    .catch((err) => console.error(err));
};

export const addProduct = (product: product) => (dispatch: any) => {
  API.post("/products/", product)
    .then(({ data }) => dispatch({ type: "ADD_PRODUCT", payload: data }))
    .catch((err) => console.error(err));
};
