import { Link } from 'react-router-dom';
import Pageview from '../../../core-ui/onboard/View';
import Input from '../../../components/Input';
import FormControl from '../../../components/FormControl';
import Button from '../../../components/Button';
import formHandler from './core/FormHandler';

function Login() {
  const { email, handleEmail, password, handlePassword, handleMouseDown, handleClickShow } =
    formHandler();

  const BottomLink = () => {
    return (
      <div className="link">
        <Link to="/forgot-password">Forgot Password?</Link>
        <h5>.</h5>
        <Link to="/">Sign up for JustBett</Link>
      </div>
    );
  };

  return (
    <Pageview title="Log Into Your Account" className="onbaord" bottomLink={<BottomLink />}>
      <form>
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
        <div className="text-center mt-2">
          <Button loading={false} label="Login" className="btn btn-warning btn-block" />
        </div>
      </form>
    </Pageview>
  );
}

export default Login;
