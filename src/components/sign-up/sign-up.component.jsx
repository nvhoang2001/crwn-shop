import React from "react";
import "./sign-up.style.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            fullname: "",
            email: "",
            password: "",
            confirmPassword: "",
        };
    }

    handlerSubmit = async e => {
        e.preventDefault();
        const { fullname, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("Password don't match.");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createUserProfileDocument(user, { fullname });
            this.setState({
                fullname: "",
                email: "",
                password: "",
                confirmPassword: "",
            });
        } catch (error) {
            console.error(error);
        }
    };

    handlerChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    render() {
        const { fullname, email, password, confirmPassword } = this.state;

        return (
            <div className="sign-up">
                <h2 className="title"> Don't have an accound?</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handlerSubmit}>
                    <FormInput
                        type="text"
                        name="fullname"
                        value={fullname}
                        label="Fullname"
                        handlerChange={this.handlerChange}
                        required
                    />
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        label="Email"
                        handlerChange={this.handlerChange}
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        label="Password"
                        handlerChange={this.handlerChange}
                        required
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        label="Confirm Password"
                        handlerChange={this.handlerChange}
                        required
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;
