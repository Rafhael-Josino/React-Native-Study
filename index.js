/**
 * @format
 */

import FontAwesome from 'react-native-vector-icons/FontAwesome';
FontAwesome.loadFont();

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
