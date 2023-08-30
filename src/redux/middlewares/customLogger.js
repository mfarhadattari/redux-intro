const customLogger = (store) => (next) => (action) => {
  const previousState = store.getState();
  console.log("previousState :", previousState);
  console.log("actions :", action);
  next(action);
  const newState = store.getState();
  console.log("newState :", newState);
};

export default customLogger;
