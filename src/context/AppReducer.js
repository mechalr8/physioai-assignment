const AppReducer = (state, action) => {
    switch (action.type) {
      case "SET_USERNAME":
        return {
          ...state,
          username: action.payload,
        };
      case "SET_PASSWORD":
        return {
          ...state,
          password: action.payload,
        };
      case "SET_USER":
        return {
          ...state,
          user: action.payload,
        };
      default:
        return state;
    }
}

export default AppReducer
