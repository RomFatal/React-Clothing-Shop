import React from "react";

import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.style.scss'

class SignUp extends React.Component {
    constructor(props) {
        super();

        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }

    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state

        if(password != confirmPassword)
        {
        alert("password don't match")
        return;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
            })
        }
        catch(error){
            console.log('error creating user', error.message);
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })

    }


    render() {
        const {displayName, email, password, confirmPassword} = this.state
        return (
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                <span>Sign Up with your email and password</span>

                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                <FormInput
                        name="displayName"
                        type="text"
                        handleChange={this.handleChange}
                        value={displayName}
                        label='Display Name'
                        required />
                    <FormInput
                        name="email"
                        type="email"
                        handleChange={this.handleChange}
                        value={email}
                        label='Email'
                        required />
                    <FormInput
                        name="password"
                        type="password"
                        handleChange={this.handleChange}
                        value={password}
                        label='Password'
                        required />
                        <FormInput
                        name="confirmPassword"
                        type="password"
                        handleChange={this.handleChange}
                        value={confirmPassword}
                        label='Confirm Password'
                        required />
                    <div className="buttons">
                        <CustomButton type="submit">Sign Up</CustomButton>
                    </div>
                </form>
            </div>)
    }
}

export default SignUp;