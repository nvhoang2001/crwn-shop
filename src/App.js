import "./App.css";
import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shoppage/shoppage.component.jsx";
import SignInSignUp from "./pages/sign-in-up-page/sign-in-up-page.component";
import Header from "./components/header/header.component";
import { Route, Switch } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null,
        };
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (!userAuth) {
                this.setState({ currentUser: userAuth });
                return;
            }

            const userRef = await createUserProfileDocument(userAuth);

            userRef.onSnapshot(snapshot => {
                this.setState({
                    currentUser: {
                        id: snapshot.id,
                        ...snapshot.data(),
                    },
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
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route path="/signin" component={SignInSignUp} />
                </Switch>
            </div>
        );
    }
}

export default App;
