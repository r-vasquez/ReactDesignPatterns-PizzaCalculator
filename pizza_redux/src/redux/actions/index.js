import { CHANGEGUEST, CHANGESLICES, RESET } from './actionTypes';

export const changeGuest = e => {
  const action = {
    type: CHANGEGUEST,
    value: e.target.value
  };

  return action;
};

export const changeSlices = e => {
  const action = {
    type: CHANGESLICES,
    value: e.target.value
  };

  return action;
};

export const reset = () => {
  const action = {
    type: RESET
  };

  return action;
};
