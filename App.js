import 'react-native';
import React from 'react';
import firebase from 'firebase';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Geolocation from '@react-native-community/geolocation';
import MapScreen from './screens/MapScreen';
import SurveyScreen from './screens/SurveyScreen';
import HomeScreen from './screens/homescreen';

// const stackNav = createStackNavigator({
//   Survey: {
//       screen: SurveyScreen
//   },
//   SurveyCompleted: {
//       screen: SurveyCompletedScreen
//   }
// });


// var config = {
//   apiKey: "YOUR_KEY_HERE",
//   databaseURL: "YOUR_DB_HERE",
//   projectId: "olivia-app-75382",
// };

firebaseApp = firebase.initializeApp(config);

export const firebaseAuth = firebaseApp.auth()


signIn = () => {
  firebaseAuth.signInAnonymously()
      .catch(error => {
          this.setState({ errorMessage: error.message }, () => {
              ToastAndroid.show(this.state.errorMessage, ToastAndroid.SHORT);
          })
      });
      firebaseAuth.onAuthStateChanged( user => {
      })

}

signIn()







const AuthStack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <AuthStack.Navigator>
      <AuthStack.Screen name="Home" component={HomeScreen} />
      <AuthStack.Screen name="Take Survey" component={SurveyScreen} />
      <AuthStack.Screen name="View Map" component={MapScreen} />
    </AuthStack.Navigator>
  </NavigationContainer>
);
