import React from 'react';
import { Link } from 'react-router-dom';

import Pageview from '../../../lib/layout/home/OnboardPageview';
import FormControl from '../../../lib/control/FormControl';
import Button from '../../../lib/control/Button';

import formHandler from './core/FormHandler';
function ResetPassword() {
  const [
    password,
    handlePasword,
    handleMouseDown,
    handleClickShow,
    cpassword,
    chandlePasword,
    chandleMouseDown,
    chandleClickShow,
  ] = formHandler();

  const BottomLink = () => {
    return (
      <div className="link text-center">
      Remember now? <Link to="/login">Login</Link>
      </div>
    );
  };

  return (
    <Pageview
      title="Log Into Your Account"
      className="onbaord"
      bottomLink={<BottomLink />}
    >
      <form>
        <FormControl
          label="Password"
          type={password.showPassword}
          value={password.password}
          onChange={handlePasword('password')}
          error={password.error}
          helperText={password.helperText}
          onClick={handleClickShow}
          onMouseDown={handleMouseDown}
        />

        <FormControl
          label="confirm"
          type={cpassword.showPassword}
          value={password.password}
          onChange={chandlePasword('password')}
          error={cpassword.error}
          helperText={cpassword.helperText}
          onClick={chandleClickShow}
          onMouseDown={chandleMouseDown}
        />

        <div className="text-center mt-4">
          <Button
            loading={false}
            label="Reset Now"
            className="btn btn-warning btn-block"
          />
        </div>
      </form>
    </Pageview>
  );
}

export default ResetPassword;
