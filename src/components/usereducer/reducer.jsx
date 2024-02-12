const reducer = (state, action) => {
  if (action.type === "INC") {
    return (state = state + 1);
  }
  if (action.type === "DEC") {
    let newval = 0;
    state >= 1 ? (newval = state - 1) : (newval = 0);
    return newval;
  }
  return state;
};
export default reducer;
