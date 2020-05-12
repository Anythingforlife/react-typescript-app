import {useDispatch} from 'react-redux';
import {toast} from 'react-toastify';
import notificationAction from '../actions/notifications';
import {Notification} from '../model/notification';
import {ToasterType} from './enum';

export default (notification: Notification, test: Function) => {
  const dispatch = useDispatch();

  switch (notification.type) {
    case ToasterType.Error:
      toast.error(notification.message);
      break;
    case ToasterType.Success:
      toast.success(notification.message);
      break;
    case ToasterType.Warn:
      toast.warn(notification.message);
      break;
    case ToasterType.Info:
      toast.info(notification.message);
  }
  if (notification.type) {
    dispatch(notificationAction.clearNotification());
  }
};
