import * as type from '.';

type StateProps = {
  open: boolean;
  loading: boolean;
  message: string;
  success: boolean;
  payload?: any;
  isFiltered: boolean
};

type TypeProps =
  | 'REQUEST_LOADING'
  | 'CLOSE_ALERT'
  | 'REQUEST_SUCCESS'
  | 'REQUEST_FAILED'
  | 'REQUEST_ERROR'
  | 'FORM_VALIDATION'
  | 'RESET_FILTER';

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
  isFiltered: false
};

export const reducer = (state: StateProps, action: ActionProps) => {
  switch (action.type) {
    case type.LOADING:
      return { ...state, loading: true };
    case type.SUCCESS:
      return {
        loading: false,
        open: true,
        message: action.message,
        success: true,
        payload: action.payload,
        isFiltered: true 
      };
    case type.FAILED:
      return {
        loading: false,
        open: true,
        message: action.message,
        success: false,
        payload: '',
        isFiltered: false 
      };
    case type.ERROR:
      return {
        loading: false,
        open: true,
        message: action.message,
        success: false,
        payload: '',
        isFiltered: false 
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
        isFiltered: false 
      };
    case 'RESET_FILTER':
      return { ...state, open: false, isFiltered: false };
    default:
      return state;
  }
};
