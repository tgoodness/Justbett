import React from 'react';
import { Link } from 'react-router-dom';

import Pageview from '../../../lib/layout/home/OnboardPageview';
import Input from '../../../lib/control/Input';
import Button from '../../../lib/control/Button';

import formHandler from './core/FormHandler';
function ForgotPassword() {
  const [
    email,
    handleEmail
  ] = formHandler();

  const BottomLink = () => {
    return (
      <div className="link text-center">
        Remember now? <Link to="/register">&nbsp;Sign In</Link>
      </div>
    );
  };

  return (
    <Pageview title="Forgot Password" className="onbaord" bottomLink={<BottomLink />}>
      <form>
        <Input
          label="Email"
          value={email.value}
          type="email"
          onChange={handleEmail}
          error={email.error}
          helperText={email.helperText}
        />

        <div className="text-center mt-2">
          <Button
            loading={false}
            label="Recover"
            className="btn btn-warning btn-block"
          />
        </div>
      </form>
    </Pageview>
  );
}

export default ForgotPassword;
