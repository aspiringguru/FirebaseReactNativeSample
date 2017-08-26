/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import * as firebase from 'firebase';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDn9IlrDz889NFiJH_mDEQ1mfPjm1pFa2E",
  authDomain: "crm1-48bcb.firebaseapp.com",
  databaseURL: "https://crm1-48bcb.firebaseio.com",
  projectId: "crm1-48bcb",
  storageBucket: "crm1-48bcb.appspot.com",
  messagingSenderId: "629373816984"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);


class FirebaseReactNativeSample extends Component {
  render() {
    return (
      <View style="{styles.container}">
        <Text  style={styles.welcome}>zzzzzzzzzzz</Text>
      </View>
    );
  }
}

/*
export default class FirebaseReactNativeSample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
            bbbccc
        </Text>
      </View>
    );
  }
}
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('FirebaseReactNativeSample', () => FirebaseReactNativeSample);
