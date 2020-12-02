import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.style.scss';

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
	}

	handleChange = event => {
		const { value, name } = event.target;
		this.setstate({ [name]: value });
	};

	handleSubmit = event => {
		event.preventDefault();
		this.setState({ email: '', password: '' });
	};
	render() {
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

					<CustomButton type='submit'>Sign In</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignIn;
