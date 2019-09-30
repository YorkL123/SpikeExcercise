import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';


export default class CreateAccountForm extends Component {
    render() {
        return (
            <View>
                <Text>Not a member?</Text>
                <TouchableOpacity><Text>Create an Account</Text></TouchableOpacity>
            </View>

        );
    } 
}