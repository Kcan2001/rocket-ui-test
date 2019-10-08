import { ACTIONS } from '../actions/Launches';

const initialState = {
  launches: [],
  fetching: false,
  modal: {
    active: false
  }
};

const modalReducer = (state, action) => {  
  return ({
    ...state.modal,
    data: action.payload,
    active: true
  })
}

const actionHandlers = {
  [ACTIONS.REQUEST_LAUNCHES]: ({ state }) => ({
    ...state,
    fetching: true
  }),
  [ACTIONS.RECEIVE_LAUNCHES]: ({ state, action }) => ({
    ...state,
    fetching: false,
    launches: [...state.launches, ...action.payload.launches]
  }),
  [ACTIONS.SHOW_LAUNCH_MODAL]: ({ state, action }) => ({
    ...state,
      modal: modalReducer(state, action)
  }),
  [ACTIONS.HIDE_LAUNCH_MODAL]: ({ state }) => ({
    ...state,
      modal: {
      active: false
    }
  }),
};

export default (state = initialState, action) =>
  actionHandlers[action.type] ? actionHandlers[action.type]({ state, action }) : state;
