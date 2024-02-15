// userReducer.js
const initialState = {
    username: '',
    email: '',
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER_DETAILS':
        return {
          ...state,
          username: action.payload.name,
          email: action.payload.email,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  