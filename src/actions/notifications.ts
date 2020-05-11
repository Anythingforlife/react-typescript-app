const createNotification = (message: String) => {
  return {type: 'CREATE_NOTIFICATION_REQUESTED', payload: message};
};

const clearNotification = () => {
  return {type: 'CLEAR_NOTIFICATION_REQUESTED'};
};

export default {createNotification, clearNotification};
