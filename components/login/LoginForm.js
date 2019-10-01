import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';


export default class LoginForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle='light-content'
                />
                
                <TextInput
                    placeholder='Username/Email'
                    placeholderTextColor="rgba(0,0,0,0.8)"
                    returnKeyType='next'
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={styles.input}
                />
                <TextInput 
                    placeholder='Password'
                    placeholderTextColor='rgba(0,0,0,0.8)'
                    returnKeyType='go'
                    secureTextEntry
                    ref={(input) => this.passwordInput = input}
                    style={styles.input}
                />
                
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container:{
        padding: 20
    },

    input:{
        height: 40,
        color: 'rgba(0,0,0,0.8)',
        marginBottom: 20,
        backgroundColor: 'rgba(255,255,255,0.3)'
    },

    buttonContainer:{
        backgroundColor: '#D6B9B8',
        paddingVertical: 20
    },
    
    buttonText:{
        textAlign: 'center',
        fontWeight: '800'
    }
})