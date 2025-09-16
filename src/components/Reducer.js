export let initialState = {count: 0};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'increment': return {count: state.count+1}
        case 'decrement': return {count: state.count-1}
        default: return state
    }
}

// another example of reducer : formReducer
export const initialForm = {
    name: '',
    email: '',
    age: '',
    submitted: false
  };
  
  export const formReducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_FIELD':
        return {
          ...state,
          [action.field]: action.value,
        };
      case 'RESET':
        return initialForm;
      case 'SUBMIT':
        return {
          ...state,
          submitted: true,
        };
      default:
        return state;
    }
  };
