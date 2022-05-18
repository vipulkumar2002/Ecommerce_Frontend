const initialState = {
  token: null,
  user: {
    email: null,
    id: null,
  },
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(state, payload);
  switch (type) {
    case "LOGIN_SUCCESS":
      return { ...payload };
    case "LOGIN_FAILED":
      return state;
    case "USER_LOAD":
      return { ...payload };
    default:
      return state;
  }
};

export default authReducer;
