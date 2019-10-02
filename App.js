import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Login from './components/login/Login.js';
import Dashboard from './components/Dashboard.js';

import firebase from 'firebase';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        loggedIn: 0,
        registeredUser: 0,
        name: "Guest"
    }
  }
  componentWillMount() {

    var firebaseConfig = {
      apiKey: "AIzaSyC9TQSb2HH4xGki-4b9wIbDyFWYGk9ghp0",
      authDomain: "spike-exercise-cs-506.firebaseapp.com",
      databaseURL: "https://spike-exercise-cs-506.firebaseio.com",
      projectId: "spike-exercise-cs-506",
      storageBucket: "",
      messagingSenderId: "544859622294",
      appId: "1:544859622294:web:da0f2489b2e01322896bb7"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // firebase.database().ref("users/001").set(
    //   {
    //     name: 'Ethan',
    //     age: 21
    //   }
    // ).then(() => {
    //   console.log("Inserted");
    // }).catch((error) => {
    //   console.log(error);
    // });
  }

  render() {

    // if(this.state.loggedIn.value == 0) {
    //   currView = 
    // }


    return (
      //<Login />
      <Dashboard />
    );
  }
}

const styles = StyleSheet.create({

});
