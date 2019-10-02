import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import firebase from 'firebase';
import AddHouse from './AddHouse.js';


export default class Dashboard extends Component {

    render() {

        return (
            <AddHouse />
        );
    }

}