import { toast } from 'react-toastify';

const notifySuccess = (message: string) => {
  toast.success(message, {
    progressStyle: { background: '#30AF5B' }
  });
};

const notifyError = (message: string) => {
  toast.error(message);
};

const notifyInfo = (message: string) => {
  toast.info(message);
};

export {
  notifySuccess,
  notifyError,
  notifyInfo
};
