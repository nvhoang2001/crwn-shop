import React from "react";
import "./sign-in.style.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: "",
        };
    }

    handlerSubmit = async e => {
        e.preventDefault();

        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: "", password: "" });
        } catch (error) {
            console.error(error);
        }
    };

    handlerChange = e => {
        e.preventDefault();
        const { value, name } = e.target;

        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password.</span>

                <form onSubmit={this.handlerSubmit}>
                    <FormInput
                        label="Email"
                        name="email"
                        type="email"
                        value={this.state.email}
                        required
                        handlerChange={this.handlerChange}
                    />
                    <FormInput
                        label="Password"
                        name="password"
                        type="password"
                        value={this.state.password}
                        handlerChange={this.handlerChange}
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="submit"> Sign in </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            {" "}
                            Sign in with Google{" "}
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
