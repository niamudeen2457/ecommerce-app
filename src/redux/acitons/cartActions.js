const addToCArt = (data) => {
  console.log(data, "action.payload");

  return {
    type: "ADD_TO_CART",
    payload: data
  };
};
export default addToCArt;
