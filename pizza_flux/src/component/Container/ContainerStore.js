import EventEmitter from 'events';
import AppDispatcher from './AppDispatcher';

let initialState = {
  guest: 0,
  slices: 0,
  pizzas: 0
};

let state = { ...initialState };

class ContainerStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      if (action.type === 'CHANGEGUEST') {
        state.guest = action.value;
        this.emit('change');
      }
      if (action.type === 'CHANGESLICES') {
        state.slices = action.value;
        this.emit('change');
      }
      if (action.type === 'CALCULATEPIZZAS') {
        console.log(state);
        if (state.guest && state.slices) {
          state.pizzas = Math.ceil((state.guest * state.slices) / 8);
        }
        this.emit('change');
      }
      if (action.type === 'RESET') {
        state = { ...initialState };
        this.emit('change');
      }
    });
  }

  getState() {
    return state;
  }
}

export default new ContainerStore();
