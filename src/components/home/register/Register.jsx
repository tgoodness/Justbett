import React from 'react';
import { Link } from 'react-router-dom';

import Pageview from '../../../lib/layout/home/OnboardPageview';
import Input from '../../../lib/control/Input';
import FormControl from '../../../lib/control/FormControl';
import Button from '../../../lib/control/Button';

import formHandler from './core/FormHandler';

function Register() {
  const [
    username,
    handleUsername,
    email,
    handleEmail,
    password,
    handlePassword,
    handleMouseDown,
    handleClickShow,
  ] = formHandler();

   const BottomLink = () => {
     return (
				<div className="link text-center">
					<Link to="/login"> Sign In?</Link>
				</div>
			);
   };

  return (
    <Pageview
      title="Create An Account"
      className="register"
      bottomLink={<BottomLink />}
    >
      <form>
        <Input
          label="Username"
          value={username.value}
          type="text"
          onChange={handleUsername}
          error={username.error}
          helperText={username.helperText}
        />

        <Input
          label="Email"
          value={email.value}
          type="email"
          onChange={handleEmail}
          error={email.error}
          helperText={email.helperText}
        />

        <FormControl
          label="Password"
          type={password.showPassword}
          value={password.password}
          onChange={handlePassword('password')}
          error={password.error}
          helperText={password.helperText}
          onClick={handleClickShow}
          onMouseDown={handleMouseDown}
        />

        <div className="terms-and-policy">
          By clicking this button we believe you’re above 18 years above and you
          agree to our <span>Terms</span> and <span>Policy</span>
        </div>

        <div className="text-center mt-4">
          <Button
            loading={false}
            label="Register"
            className="btn btn-warning btn-block"
          />
        </div>
      </form>
    </Pageview>
  );
}

export default Register;
