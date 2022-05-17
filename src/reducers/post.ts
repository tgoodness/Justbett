import * as type from '.';
import util from '../helpers/utils';

type StateProps = {
  open: boolean;
  loading: boolean;
  message: string;
  success: boolean;
  payload?: any;
};

type TypeProps =
  | 'REQUEST_LOADING'
  | 'CLOSE_ALERT'
  | 'REQUEST_SUCCESS'
  | 'REQUEST_FAILED'
  | 'REQUEST_ERROR'
  | 'FORM_VALIDATION';

type ActionProps = {
  type: TypeProps;
  message?: any;
  payload?: any;
};

export const init: StateProps = {
  open: false,
  loading: false,
  message: '',
  success: false,
  payload: '',
};

export const reducer = (state: StateProps, action: ActionProps) => {
  switch (action.type) {
    case type.LOADING:
      return { ...state, loading: true };
    case type.SUCCESS:
      return {
        loading: false,
        open: true,
        message: action.message.data.message,
        success: true,
        payload: action.payload,
      };
    case type.FAILED:
      return {
        loading: false,
        open: true,
        message: action.message.data.message,
        success: false,
        payload: '',
      };
    case type.ERROR:
      return {
        loading: false,
        open: true,
        message: util.requestError(action.message),
        success: false,
        payload: '',
      };
    case type.CLOSE_ALERT:
      return { ...state, open: false };

    case type.VALIDATE:
      return {
        loading: false,
        open: true,
        message: action.message,
        success: false,
        payload: '',
      };
    default:
      return state;
  }
};
