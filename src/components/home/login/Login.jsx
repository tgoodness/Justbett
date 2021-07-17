import React from 'react';
import { Link } from 'react-router-dom';

import Pageview from '../../../lib/layout/home/OnboardPageview';
import Input from '../../../lib/control/Input';
import FormControl from '../../../lib/control/FormControl';
import Button from '../../../lib/control/Button';
import formHandler from './core/FormHandler';

function Login () {
	const [
		email,
		handleEmail,
		password,
		handlePassword,
		handleMouseDown,
		handleClickShow,
	] = formHandler();

	const BottomLink = () => {
		return (
			<div className="link">
				<Link to="forgot-password">Forgot Password?</Link>
				<h5>.</h5>
				<Link to="/register">Sign up for JustBett</Link>
			</div>
		);
	};

	return (
		<Pageview
			title="Log Into Your Account"
			className="onbaord"
			bottomLink={ <BottomLink /> }>
			<form>
				<Input
					label="Email"
					value={ email.value }
					type="email"
					onChange={ handleEmail }
					error={ email.error }
					helperText={ email.helperText }
				/>

				<FormControl
					label="Password"
					type={ password.showPassword }
					value={ password.password }
					onChange={ handlePassword('password') }
					error={ password.error }
					helperText={ password.helperText }
					onClick={ handleClickShow }
					onMouseDown={ handleMouseDown }
				/>
				<div className="text-center mt-2">
					<Button
						loading={ false }
						label="Login"
						className="btn btn-warning btn-block"
					/>
				</div>
			</form>
		</Pageview>
	);
}

export default Login;
