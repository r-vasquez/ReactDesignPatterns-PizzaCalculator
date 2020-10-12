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
      switch (action.type) {
        case 'CHANGEGUEST':
          state.guest = action.value;
          state.pizzas = Math.ceil((state.guest * state.slices) / 8);
          this.emit('change');
          break;
        case 'CHANGESLICES':
          state.slices = action.value;
          state.pizzas = Math.ceil((state.guest * state.slices) / 8);
          this.emit('change');
          break;
        case 'RESET':
          state = { ...initialState };
          this.emit('change');
          break;
        default:
          console.error(`Action Type: ${action.type} is not defined`);
          break;
      }
    });
  }

  getState() {
    return state;
  }
}

export default new ContainerStore();
