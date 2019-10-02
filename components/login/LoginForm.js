import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';


export default class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    validateForm() {
        return this.state.email.length > 0 &&
               this.state.password.length > 0
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log("Username: " + this.state.email + " and password: " + this.state.password);
    // need to check that username exists in database
    //     firebase.database.ref("users").on("username",function() {

    //     });
    // // firebase.database().ref("users/001").set(
    // //   {
    // //     name: 'Ethan',
    // //     age: 21
    // //   }
    // // ).then(() => {
    // //   console.log("Inserted");
    // // }).catch((error) => {
    // //   console.log(error);
    // // });
    }

    render() {
        
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle='light-content'
                />
                
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    placeholderTextColor="rgba(0,0,0,0.8)"
                    returnKeyType='next'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}
                    required

                    ref={(input) => this.emailInput = input}
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                />
                <TextInput 
                    style={styles.input}
                    placeholder='Password'
                    placeholderTextColor='rgba(0,0,0,0.8)'
                    returnKeyType='go'
                    secureTextEntry
                    required

                    ref={(input) => this.passwordInput = input}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                />
                
                <TouchableOpacity style={styles.buttonContainer} onPress={this.handleSubmit} disabled={!this.validateForm()}>
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