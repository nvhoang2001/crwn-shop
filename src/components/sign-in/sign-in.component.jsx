import React from "react";
import "./sign-in.style.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
        };
    }

    handlerSubmit = e => {
        e.preventDefault();
        this.setState({ email: "", password: "" });
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

                    <CustomButton type="submit"> Sign in </CustomButton>
                    <CustomButton onClick={signInWithGoogle}>
                        {" "}
                        Sign in with Google{" "}
                    </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;
