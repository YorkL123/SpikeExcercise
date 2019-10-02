import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import LoginForm from './LoginForm.js';
import CreateAccountForm from './CreateAccountForm.js';

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            guestUserLoginFlag: 0,
            createAccountFlag: 0,
            existingUserLoginFlag: 0
        }
    }

    createAccountPress = () => {
        this.setState( {
            createAccountFlag: 1,
            guestUserLoginFlag: 0,
            existingUserLoginFlag: 0
        });
        console.log("User would like to create an account");
    }

    guestPress = () => {
        this.setState({
            isGuestUser: 1,
            createAccountFlag: 0,
            existingUserLoginFlag: 0
        })
        console.log("User would like to continue as guest");
    }

    render() {
        console.log("I'm at login.js render");
        
        // add this to line <CreateAccountForm />
        const guest = this.state.guestUserLoginFlag;
        const existing = this.state.existingUserLoginFlag;
        const create = this.state.createAccountFlag;

        // See all views until user creates account
        let logoContainer = <View style={styles.logoContainer}>
                                <Image style={styles.logo} source={require('../../Images/UW-LiveWellLogo.png')}/>
                                <Text style={styles.title}>Helping UW-Madison students find roommates</Text>
                            </View>

        let loginForm = <View>
                            <LoginForm />
                        </View>

        let createLink = <View style={styles.createAccountLink}>
                            <Text>Not a member?  </Text>
                            <TouchableOpacity onPress={this.createAccountPress} onClick={CreateAccountForm}><Text style={styles.link}>Create an Account</Text></TouchableOpacity>
                         </View>

        let guestContinue =  <View style={styles.buttonView}>
                                <TouchableOpacity style={styles.buttonContainer} onPress={this.guestPress}>
                                    <Text style={styles.buttonText}>Continue as Guest</Text>
                                </TouchableOpacity>
                            </View>

        let createAccountView = null;

        if(create == 1) {
            loginForm = null;
            createLink = null;
            guestContinue = null;
            createAccountView = <CreateAccountForm />
        }

        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>

                {logoContainer}

                {loginForm}

                {createAccountView}

                {createLink}

                {guestContinue}

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

    createAccountLink:{
        padding: 10,
        flexDirection: 'row'
    },
    
    link:{
        fontWeight: '700',
        textDecorationLine: 'underline'
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