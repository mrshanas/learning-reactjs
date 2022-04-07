import API from "../../api";

interface sale {
  amount_paid: string;
  quantity_bought: number;
  product: number;
}

export const showSales = () => (dispatch: any) => {
  API.get("/sales/")
    .then(({ data }) => dispatch({ type: "SHOW_SALES", payload: data }))
    .catch((err) => console.error(err));
};

export const sellProduct = (sale: sale) => (dispatch: any) => {
  API.post("/sales/", sale)
    .then(({ data }) => dispatch({ type: "SELL_PRODUCT", payload: data }))
    .catch((err) => console.error(err));
};
