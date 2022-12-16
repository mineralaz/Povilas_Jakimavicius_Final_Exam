import { toast } from 'react-hot-toast';
import css from './toasts.module.css';

export const failNotify = (message) =>
  toast(message, {
    className: css.fail,
  });
export const successNotify = (message) =>
  toast(message, {
    className: css.success,
  });
