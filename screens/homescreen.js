import { StyleSheet, Button, ScrollView, Text, TextInput, View } from 'react-native';
import React, { Component } from 'react';


export default class HomeScreen extends Component {
    static navigationOptions = () => {
        return {
            headerStyle: {
                backgroundColor: '#8bb8e8',
                height: 40,
                elevation: 5,
            },
            headerTintColor: '#fff',
            headerTitle: 'What would you like to do?',
            headerTitleStyle: {
                flex: 1,
            }
        };
    }



    

    constructor(props) {
        super(props);
        this.state = { backgroundColor: '#8bb8e8' };
    }




    render() {

        return (
        
        
        
        <View  style={styles.filler}>
        <View>
        <Text style={styles.text} >Welcome to the Olivia App</Text>
        <Text></Text>

        <Text style={styles.text2}>Take the survey to get a personalized {"\n"} risk assessment,
        or check out the map {"\n"} to see hot spots in your area.</Text>
        </View>
        <View>
        <Button
            onPress={() => {this.props.navigation.navigate('Take Survey');}}
            style={styles.button}
            title="Take Survey"
            color="#841584"
            accessibilityLabel="Click here to take the survey"
            
          />

            <Button
            onPress={() => {this.props.navigation.navigate('View Map');}}
            style={styles.button}
            title="View Map"
            color="#a9a9a9"
            accessibilityLabel="Click here to take the survey"
            
          />
          </View>
          </View>


        );
    }
}

const styles = StyleSheet.create({
        text: {
            textAlign: 'center',
            fontSize: 24,
            fontWeight: 'bold'
        },
        text2: {
            textAlign: 'center',
            fontSize: 16
        },
        filler: {
            flex: 1,
            justifyContent: 'space-evenly'
        }
    });