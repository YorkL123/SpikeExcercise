import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';


export default class CreateAccountForm extends Component {
    render() {
        return (
            <View style={styles.createAccountLink}>
                <Text>Not a member?  </Text>
                <TouchableOpacity><Text style={styles.link}>Create an Account</Text></TouchableOpacity>
            </View>
        );
    } 
}

const styles = StyleSheet.create({
    createAccountLink:{
        padding: 10,
        flexDirection: 'row'
    },
    
    link:{
        fontWeight: '700',
        textDecorationLine: 'underline'
    }
})