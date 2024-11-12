/**
 * @format
 */

import '@react-native-firebase/app'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { firebase} from '@react-native-firebase/auth';
import {firebase as storeFire} from '@react-native-firebase/firestore';
console.log(firebase.apps)
console.log(storeFire)
AppRegistry.registerComponent(appName, () => App);
