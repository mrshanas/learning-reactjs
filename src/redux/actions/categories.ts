import API from "../../api";

interface category {
  title: string;
}

export const showCategories = () => (dispatch: any) => {
  API.get("/categories/")
    .then(({ data }) => dispatch({ type: "SHOW_CATEGORIES", payload: data }))
    .catch((err) => console.error(err));
};

export const addCategory = (category: category) => (dispatch: any) => {
  API.post("/categories/", category)
    .then(({ data }) => dispatch({ type: "ADD_CATEGORY", payload: data }))
    .catch((err) => console.error(err));
};
