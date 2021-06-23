import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyA65FQF8jltCzaLxCEEvL_IPy-HeWCCCEU",
    authDomain: "crwn-shop-5348f.firebaseapp.com",
    projectId: "crwn-shop-5348f",
    storageBucket: "crwn-shop-5348f.appspot.com",
    messagingSenderId: "207058084083",
    appId: "1:207058084083:web:c70af4342f5a261e4bd786",
    measurementId: "G-R9EBXHLVSR",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        try {
            const { displayName, email } = userAuth,
                createAt = new Date();

            await userRef.set({
                fullname: displayName,
                email,
                createAt,
                ...additionalData,
            });
        } catch (error) {
            console.error("Error creating user", error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
