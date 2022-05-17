import React from 'react';
import { Link } from 'react-router-dom';

import Pageview from '../../../core-ui/onboard/View';
import FormControl from '../../../components/FormControl';
import Button from '../../../components/Button';

import formHandler from './core/FormHandler';
function ResetPassword() {
  const {
    password,
    handlePasword,
    handleMouseDown,
    handleClickShow,
    cpassword,
    chandlePasword,
    chandleMouseDown,
    chandleClickShow,
  } = formHandler();

  const BottomLink = () => {
    return (
      <div className="link text-center">
        Remember now? <Link to="/login">Login</Link>
      </div>
    );
  };

  return (
    <Pageview title="Log Into Your Account" className="onbaord" bottomLink={<BottomLink />}>
      <form>
        <FormControl
          id="newPassword"
          name="newPassword"
          label="New Password"
          type={password.showPassword}
          value={password.value}
          onChange={handlePasword('password')}
          error={password.error}
          helperText={password.helperText}
          onClick={handleClickShow}
          onMouseDown={handleMouseDown}
        />

        <FormControl
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          type={cpassword.showPassword}
          value={password.value}
          onChange={chandlePasword('password')}
          error={cpassword.error}
          helperText={cpassword.helperText}
          onClick={chandleClickShow}
          onMouseDown={chandleMouseDown}
        />

        <div className="text-center mt-4">
          <Button loading={false} label="Reset Now" className="btn btn-warning btn-block" />
        </div>
      </form>
    </Pageview>
  );
}

export default ResetPassword;
