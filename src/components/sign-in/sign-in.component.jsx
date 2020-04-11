import React from 'react';

import { Row, Col } from 'react-bootstrap';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
		};
	}

	handleSubmit = (event) => {
		event.preventDefult();

		this.setState({ email: '', password: '' });
	};

	handleChange = (event) => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<Row>
				<Col sm={6}>
					<h2>I already have an account</h2>
					<span>Sign in with your email and password</span>

					<form onSubmit={this.handleSubmit}>
						<FormInput
							name='email'
							type='email'
							value={this.state.email}
							handleChange={this.handleChange}
							label='email'
							required
						/>
						<FormInput
							name='password'
							type='password'
							value={this.state.password}
							handleChange={this.handleChange}
							label='password'
							required
						/>
						<CustomButton type='submit' value='Submit Form'>
							Sign in
						</CustomButton>
					</form>
				</Col>
			</Row>
		);
	}
}

export default SignIn;
