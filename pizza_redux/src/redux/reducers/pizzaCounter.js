const initialState = {
  guest: 0,
  slices: 0,
  pizzas: 0
};

const pizzaCounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGEGUEST':
      return {
        ...state,
        guest: action.value,
        pizzas: Math.ceil((action.value * state.slices) / 8)
      };
    case 'CHANGESLICES':
      return {
        ...state,
        slices: action.value,
        pizzas: Math.ceil((state.guest * action.value) / 8)
      };
    case 'RESET':
      return { ...initialState };

    default:
      return state;
  }
};

export default pizzaCounterReducer;
