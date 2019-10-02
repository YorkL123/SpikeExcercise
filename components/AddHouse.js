import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import firebase from 'firebase';


export default class AddHouse extends Component {
    constructor(props) {
        super(props);

        this.state = {
            description: "",
            address: "",
            costPerMonth: "",
            noOfRooms: ""
        }

    }

    validateForm() {
        return this.state.description.length > 0 &&
               this.state.address.length > 0 &&
               this.state.costPerMonth.length > 0 &&
               this.state.noOfRooms.length > 0
    }

    handleSubmit = event => {

        event.preventDefault();

        firebase.database().ref("houses/").push(
            {
                description: this.state.description,
                address: this.state.address,
                costPerMonth: this.state.costPerMonth,
                noOfRooms: this.state.noOfRooms
            }
        ).then(() => {
            console.log("Inserted new House");
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
                    // Description
                    style={styles.input}
                    placeholder='Description'
                    placeholderTextColor="rgba(0,0,0,0.8)"
                    returnKeyType='next'
                    keyboardType='default'
                    autoCapitalize='none'
                    autoCorrect={false}
                    required

                    ref={(input) => this.descriptionInput = input}
                    onChangeText={(description) => this.setState({ description })}
                    value={this.state.description}
                />

                <TextInput
                    // Address
                    style={styles.input}
                    placeholder='Address'
                    placeholderTextColor="rgba(0,0,0,0.8)"
                    returnKeyType='next'
                    keyboardType='default'
                    autoCapitalize='none'
                    autoCorrect={false}
                    required

                    ref={(input) => this.addInput = input}
                    onChangeText={(address) => this.setState({ address })}
                    value={this.state.address}
                />

                <TextInput
                    // Cost per Month
                    style={styles.input}
                    placeholder='Cost Per Month'
                    placeholderTextColor="rgba(0,0,0,0.8)"
                    returnKeyType='next'
                    keyboardType='default'
                    autoCapitalize='none'
                    autoCorrect={false}
                    required

                    ref={(input) => this.costPerMonthInput = input}
                    onChangeText={(costPerMonth) => this.setState({ costPerMonth })}
                    value={this.state.costPerMonth}
                />

                <TextInput
                    // No. of Rooms
                    style={styles.input}
                    placeholder='Number of Rooms Available'
                    placeholderTextColor="rgba(0,0,0,0.8)"
                    returnKeyType='next'
                    keyboardType='default'
                    autoCapitalize='none'
                    autoCorrect={false}
                    required

                    ref={(input) => this.noOfRoomsInput = input}
                    onChangeText={(noOfRooms) => this.setState({ noOfRooms })}
                    value={this.state.noOfRooms}
                />

                <TouchableOpacity style={styles.buttonContainer} onPress={this.handleSubmit} disabled={!this.validateForm()}>
                    <Text style={styles.buttonText}>Add New House</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        padding: 20,
        backgroundColor: '#488583'
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