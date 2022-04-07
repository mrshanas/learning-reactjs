export default (state: any = [], action: any) => {
  switch (action.type) {
    case "SHOW_CATEGORIES":
      return action.payload;

    default:
      return state;
  }
};
