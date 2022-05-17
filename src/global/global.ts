import { useReducer } from 'react';
import { useQuery } from 'react-query';
import { init, reducer } from '../reducers/get';
import * as type from '../reducers/action-type';
import { Admin } from '../services/dashboard';
import misc from '../helpers/misc';


const  Request = () => {
  const [state, dispatch] = useReducer(reducer, init);
  const registrationId = misc.registrationId();
  useQuery('admin', () => Admin(registrationId), {
    onSuccess: (data: any) => {
      dispatch({
        type: type.SUCCESS,
         payload: data.data.data
      });
    },
    onError: (error: any) => {
      dispatch({ type: type.ERROR, message: error });
    },
  });

  return { state };
};

export default Request;
