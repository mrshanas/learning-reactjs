export default (state: string[] = [], action: any) => {
  switch (action.type) {
    case "SHOW_PRODUCTS":
      return action.payload;

    default:
      return state;
  }
};
