const createToaster = (message: String) => {
  return {type: 'CREATE_TOASTER_REQUESTED', payload: message};
};

const clearToaster = () => {
  return {type: 'CLEAR_TOASTER_REQUESTED'};
};

const showLoader = () => {
  return {type: 'SHOW_LOADER'};
};

const hideLoader = () => {
  return {type: 'HIDE_LOADER'};
};

export default {createToaster, clearToaster, showLoader, hideLoader};
