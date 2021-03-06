import React from "react";
import { createStructuredSelector } from "reselect";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shoppage/shoppage.component.jsx";
import SignInSignUp from "./pages/sign-in-up-page/sign-in-up-page.component";
import Header from "./components/header/header.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import { Route, Switch, Redirect } from "react-router-dom";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action";
import { selectCurrentUser } from "./redux/user/user.selectors";

class App extends React.Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser } = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (!userAuth) {
                setCurrentUser(userAuth);
                return;
            }

            const userRef = await createUserProfileDocument(userAuth);

            userRef.onSnapshot(snapshot => {
                setCurrentUser({
                    id: snapshot.id,
                    ...snapshot.data(),
                });
            });
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route exact path="/checkout" component={CheckoutPage} />
                    <Route
                        exact
                        path="/signin"
                        render={() =>
                            this.props.currentUser ? (
                                <Redirect to="/" />
                            ) : (
                                <SignInSignUp />
                            )
                        }
                    />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
