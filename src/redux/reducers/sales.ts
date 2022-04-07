export default (state: any = [], action: any) => {
  switch (action.type) {
    case "SHOW_SALES":
      return action.payload;

    default:
      return state;
  }
};
