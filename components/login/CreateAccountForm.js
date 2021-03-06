import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import firebase from 'firebase';


export default class CreateAccountForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        }

    }

    validateForm() {
        return this.state.firstName.length > 0 &&
               this.state.lastName.length > 0 &&
               this.state.email.length > 0 &&
               this.state.password.length > 0
    }

    handleSubmit = event => {
        // need to validate email
        event.preventDefault();
        console.log(this.state.firstName+","+this.state.lastName+","+ this.state.email+","+this.state.password);

        firebase.database().ref("users/").push(
            {
                first_name: this.state.firstName,
                last_name: this.state.lastName,
                email: this.state.email,
                password: this.state.password
            }
        ).then(() => {
            console.log("Inserted");
        }).catch((error) => {
            console.log(error);
        });
    }


    render() {
        
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle='light-content'
                />

                <TextInput
                    // First Name
                    style={styles.input}
                    placeholder='First Name'
                    placeholderTextColor="rgba(0,0,0,0.8)"
                    returnKeyType='next'
                    keyboardType='default'
                    autoCapitalize='none'
                    autoCorrect={false}
                    required

                    ref={(input) => this.firstNameInput = input}
                    onChangeText={(firstName) => this.setState({ firstName })}
                    value={this.state.firstName}
                />

                <TextInput
                    // Last Name
                    style={styles.input}
                    placeholder='Last Name'
                    placeholderTextColor="rgba(0,0,0,0.8)"
                    returnKeyType='next'
                    keyboardType='default'
                    autoCapitalize='none'
                    autoCorrect={false}
                    required

                    ref={(input) => this.lastNameInput = input}
                    onChangeText={(lastName) => this.setState({ lastName })}
                    value={this.state.lastName}
                />

                <TextInput
                    // Email
                    style={styles.input}
                    placeholder='Email'
                    placeholderTextColor="rgba(0,0,0,0.8)"
                    returnKeyType='next'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}
                    required

                    ref={(input) => this.emailInput = input}
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}
                />
                <TextInput
                    // Password
                    style={styles.input}
                    placeholder='Password'
                    placeholderTextColor='rgba(0,0,0,0.8)'
                    returnKeyType='go'
                    secureTextEntry
                    required

                    ref={(input) => this.passwordInput = input}
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                />

                <TouchableOpacity style={styles.buttonContainer} onPress={this.handleSubmit} disabled={!this.validateForm()}>
                    <Text style={styles.buttonText}>Create Account</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        padding: 20
    },

    input: {
        height: 40,
        color: 'rgba(0,0,0,0.8)',
        marginBottom: 20,
        backgroundColor: 'rgba(255,255,255,0.3)'
    },

    buttonContainer: {
        backgroundColor: '#D6B9B8',
        paddingVertical: 20
    },

    buttonText: {
        textAlign: 'center',
        fontWeight: '800'
    }
})