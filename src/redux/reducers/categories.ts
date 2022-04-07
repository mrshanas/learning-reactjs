export default (state: any = [], action: any) => {
  switch (action.type) {
    case "SHOW_CATEGORIES":
      return action.payload;

    case "ADD_CATEGORY":
      return [...state, action.payload];

    default:
      return state;
  }
};
