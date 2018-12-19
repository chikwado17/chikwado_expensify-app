import { firebase, googleAuthProvider } from '../firebase/firebase';


//dispatch at the app root and also add it to store as into combine reducer -> future reference
//login action generator
export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLogin = () => {
    //returning a function to run firebase.auth
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
};

//dispatch at the app root and also add it to store as into combine reducer -> future reference
//logout action generator
export const logout = () => ({
    type: 'LOGOUT'
});


export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    }
};



