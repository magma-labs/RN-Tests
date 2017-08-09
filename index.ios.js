/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var Login = require('./Login')

export default class RNTest extends Component {
  render() {
    return (
      <Login />
    );
  }
}

AppRegistry.registerComponent('RNTest', () => RNTest);