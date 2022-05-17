import util from '../helpers/utils';
import * as type from '.';

type StateProps = {
  loading: boolean,
  open: boolean,
  message: string,
  success: boolean
  payload: any,
};

export const init: StateProps = {
  loading: false,
  open: false,
  message: '',
  success: false,
  payload: {},
};

type TypeProps =
  'REQUEST_LOADING'
  | 'CLOSE_ALERT'
  | 'REQUEST_SUCCESS'
  | 'REQUEST_FAILED'
  | 'REQUEST_ERROR';

 type ActionProps = {
  type: TypeProps,
  payload?: any,
  message?: any
};

export const reducer = (state: StateProps, action: ActionProps) => {
  switch (action.type) {
    case type.LOADING:
      return { ...state, open: false };
    case type.SUCCESS:
      return {
        loading: false,
        open: false,
        message: 'success',
        payload: action.payload,
        success: true,
      };
    case type.FAILED:
      return {
        ...state,
        loading: false,
        open: true,
        message: action.message.data.message,
      };
    case type.ERROR:
      return {
        ...state,
        loading: false,
        open: true,
        message: util.requestError(action.message),
      };
    case type.CLOSE_ALERT:
      return { ...state, open: false };
    default:
      return state;
  }
};
