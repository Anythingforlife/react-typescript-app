import {fromJS} from 'immutable';

const initialState = fromJS({
  message: null,
  type: null,
});

export default (state = initialState, action: any) => {
  switch (action.type) {
    case 'CREATE_NOTIFICATION_REQUESTED':
      return state.merge({
        message: action.payload.message,
        type: action.payload.type,
      });
    case 'CLEAR_NOTIFICATION_REQUESTED':
      return state.merge({message: null, type: null});
    default:
      return state;
  }
};
