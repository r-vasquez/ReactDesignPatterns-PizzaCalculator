import AppDispatcher from './AppDispatcher';

export const changeGuest = value => {
  const action = {
    type: 'CHANGEGUEST',
    value
  };
  AppDispatcher.dispatch(action);
};

export const changeSlices = value => {
  const action = {
    type: 'CHANGESLICES',
    value
  };
  AppDispatcher.dispatch(action);
};

export const calculatePizzas = () => {
  const action = {
    type: 'CALCULATEPIZZAS'
  };
  AppDispatcher.dispatch(action);
};
export const reset = () => {
  const action = {
    type: 'RESET'
  };
  AppDispatcher.dispatch(action);
};
