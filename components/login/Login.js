import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import LoginForm from './LoginForm.js';
import CreateAccountForm from './CreateAccountForm.js';

export default class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>

                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../../Images/UW-LiveWellLogo.png')}/>
                    <Text style={styles.title}>Helping UW-Madison students find roommates</Text>
                </View>

                <View>
                    <LoginForm />
                </View>

                <View>
                    <CreateAccountForm />
                </View>

                <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Continue as Guest</Text>
                    </TouchableOpacity>
                </View>


            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#AA3939'
    },

    logoContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },

    logo:{
        height: 100,
        width: 350
    },
    
    title:{
        color: '#FFF',
        fontSize: 26,
        marginTop: 20,
        width: 300,
        textAlign: 'center'
    },

    buttonView:{
        alignItems: 'center',
        paddingBottom: 20
    },
    buttonContainer:{
        padding: 20,
        backgroundColor: 'rgba(16,255,26,0.3)',
        paddingVertical: 10,
        width: 200
    },
    
    buttonText:{
        textAlign: 'center',
        fontWeight: '800'
    }
})