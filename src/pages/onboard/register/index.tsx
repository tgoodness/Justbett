import { Link } from 'react-router-dom';

import Pageview from '../../../core-ui/onboard/View';
import Input from '../../../components/Input';
import FormControl from '../../../components/FormControl';
import Button from '../../../components/buttons/Button';
import formHandler from './core/FormHandler';

function Register() {
  const {
    username,
    handleUsername,
    email,
    handleEmail,
    password,
    handlePassword,
    handleMouseDown,
    handleClickShow,
  } = formHandler();

  const BottomLink = () => {
    return (
      <div className="link text-center">
        <Link to="/login"> Sign In?</Link>
      </div>
    );
  };

  return (
    <Pageview title="Create An Account" className="register" bottomLink={<BottomLink />}>
      <form>
        <Input
          id="username"
          name="username"
          label="Username"
          value={username.value}
          type="text"
          onChange={handleUsername}
          error={username.error}
          helperText={username.helperText}
        />

        <Input
          id="email"
          name="email"
          label="Email"
          value={email.value}
          type="email"
          onChange={handleEmail}
          error={email.error}
          helperText={email.helperText}
        />

        <FormControl
          id="password"
          name="password"
          label="Password"
          type={password.showPassword}
          value={password.value}
          onChange={handlePassword('password')}
          error={password.error}
          helperText={password.helperText}
          onClick={handleClickShow}
          onMouseDown={handleMouseDown}
        />

        <div className="terms-and-policy">
          By clicking this button we believe you’re above 18 years above and you agree to our{' '}
          <span>Terms</span> and <span>Policy</span>
        </div>

        <div className="text-center mt-4">
          <Button loading={false} label="Register" className="btn btn-warning btn-block" />
        </div>
      </form>
    </Pageview>
  );
}

export default Register;
