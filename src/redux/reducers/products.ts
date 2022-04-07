export default (state: string[] = [], action: any) => {
  switch (action.type) {
    case "SHOW_PRODUCTS":
      return action.payload;

    case "ADD_PRODUCT":
      return [...state, action.payload];

    default:
      return state;
  }
};
