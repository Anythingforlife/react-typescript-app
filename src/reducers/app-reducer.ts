import {fromJS} from 'immutable';
import {Action} from '../model/store-model';

const initialState = fromJS({
  toasterType: null,
  toasterMessage: null,
  loaderVisible: false,
});

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case 'CREATE_TOASTER_REQUESTED':
      return state.merge({
        toasterMessage: action.payload.message,
        toasterType: action.payload.type,
      });
    case 'CLEAR_TOASTER_REQUESTED':
      return state.merge({toasterMessage: null, toasterType: null});
    case 'SHOW_LOADER':
      return state.merge({loaderVisible: true});
    case 'HIDE_LOADER':
      return state.merge({loaderVisible: false});
    default:
      return state;
  }
};
