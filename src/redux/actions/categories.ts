import API from "../../api";

export const showCategories = () => (dispatch: any) => {
  API.get("/categories/")
    .then(({ data }) => dispatch({ type: "SHOW_CATEGORIES", payload: data }))
    .catch((err) => console.error(err));
};
