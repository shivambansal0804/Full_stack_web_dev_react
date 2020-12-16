import React from 'react'
import firebase from "firebase/app";
import "firebase/auth";
import {FirebaseAuthProvider, FirebaseAuthConsumer, IfFirebaseAuthedAnd}  from "@react-firebase/auth";
import config from '../firebaseConfig'
class AdminLogin extends React.Component{
  
  render(){
    console.log(config)
    return (
      <div>
        <FirebaseAuthProvider {...config} firebase={firebase} >
          <button
            onClick={() => {
              const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
              firebase.auth().signInWithPopup(googleAuthProvider);
            }}
          >
            Sign In with Google
        </button>
          <FirebaseAuthConsumer>
            {({ isSignedIn, user, providerId }) => {
              return (
                <pre style={{ height: 300, overflow: "auto" }}>
                  {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
                </pre>
              );
            }}
          </FirebaseAuthConsumer>


          <IfFirebaseAuthedAnd
              filter={({ providerId, user }) => {
                if(!user.email){return false;}
                return (
                  providerId !== "anonymous" &&
                  user.email.indexOf("@companyname.com") > -1
                );
              }}
              >
            {({ isSignedIn, user, providerId }) => {
              return (
                <div>hsfoahsoidf</div>
              );
            }}
          </IfFirebaseAuthedAnd>
          <h1>oiasffoifbioasobf</h1>
        </FirebaseAuthProvider>
      </div>
    )
  }
}

export default AdminLogin