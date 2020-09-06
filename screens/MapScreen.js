import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import database from '@react-native-firebase/database';
import { firebaseAuth } from '../App.js'

import Geolocation from '@react-native-community/geolocation'

import MapView from 'react-native-maps';


const GREEN = 'rgba(141,196,63,1)';
const PURPLE = '#8bb8e8';

export default class MapScreen extends Component {
  constructor() {
    super()
    this.state = {
      initialPosition: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0,
      },
    }
  }

  componentDidMount() {
    Geolocation.getCurrentPosition((position) => {
      var lat = parseFloat(position.coords.latitude)
      var long = parseFloat(position.coords.longitude)


      database()
      .ref(`/users/${firebaseAuth.currentUser.uid}/checkins`)
      // .push(`${lat}, ${long}`)
      .push({"lat": lat,
            "long": long})



      var initialRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: .02,
        longitudeDelta: .02,
      }

      this.setState({ initialPosition: initialRegion })
    },
      (error) => alert(JSON.stringify(error)),
      { enableHighAccuracy: true, timeout: 20000 });
  }

  render() {
    return (
      <MapView
        style={styles.map}
        initialRegion={this.state.initialPosition}
      />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});