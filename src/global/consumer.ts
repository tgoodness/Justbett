import { useContext } from 'react';
import { GlobalContext } from '../routes/Private';

function Consumer() {
  const state = useContext(GlobalContext);

  const State = () => state;
  const Success = () => {
    if (State().success) return true;
    else return false;
  };

  const Admin = () => {
    if (Success()) {
      return State().payload.admin;
    }
    return false;
  };

  const Bank = () => {
    if (Success()) {
      return State().payload.account;
    }
    return false;
  };

    const Photo = () => {
    if (Success()) {
      return State().payload.admin.image;
    }
    return false;
  };

  return {
    State,
    Success,
    Admin,
    Bank,
    Photo
  };
}

export default Consumer;
