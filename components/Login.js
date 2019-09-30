import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>

                <View style={styles.logoContainer}>

                    <Image style={styles.logo} source={require('../Images/UW-LiveWellLogo.png')}/>
                    <Text style={styles.title}>Helping UW-Madison students find roommates</Text>

                </View>

                <View style={styles.formContainer}>
                    <LoginForm />
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
    }
})