import {useDispatch} from 'react-redux';
import {toast} from 'react-toastify';
import appAction from '../actions/app';
import {ToasterType} from './enum';

export default (type: string, message: string) => {
  const dispatch = useDispatch();

  switch (type) {
    case ToasterType.Error:
      toast.error(message);
      break;
    case ToasterType.Success:
      toast.success(message);
      break;
    case ToasterType.Warn:
      toast.warn(message);
      break;
    case ToasterType.Info:
      toast.info(message);
  }
  if (type) {
    dispatch(appAction.clearToaster());
  }
};
