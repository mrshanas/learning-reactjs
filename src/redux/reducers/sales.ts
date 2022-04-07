export default (state: any = [], action: any) => {
  switch (action.type) {
    case "SHOW_SALES":
      return action.payload;

    case "SELL_PRODUCT":
      return [...state, action.payload];

    default:
      return state;
  }
};
