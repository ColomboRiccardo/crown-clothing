import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.style.scss';

import {
	googleSignInStart,
	emailSignInStart,
} from '../../redux/user.actions.js';

class SignIn extends React.Component {
	state = {
		email: '',
		password: '',
	};

	handleChange = event => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};

	handleSubmit = async event => {
		event.preventDefault();
		const { email, password } = this.state;
		const { emailSignInStart } = this.props;

		emailSignInStart(email, password);
	};

	render() {
		const { googleSignInStart } = this.props;

		return (
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sign In with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name='email'
						value={this.state.email}
						handleChange={this.handleChange}
						required
						label='email'
					/>

					<FormInput
						name='password'
						value={this.state.password}
						handleChange={this.handleChange}
						required
						label='password'
					/>
					<div className='buttons'>
						<CustomButton type='submit'>Sign In</CustomButton>
						<CustomButton
							type='button'
							onClick={googleSignInStart}
							isGoogleSignIn
						>
							Sign in with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) =>
		dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
