export default (state: string[] = [], action: any) => {
  switch (action.type) {
    case "SHOW_PRODUCTS":
      return [...state, action.payload];
      break;

    default:
      return state;
  }
};
