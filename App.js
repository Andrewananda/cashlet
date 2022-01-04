/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './src/screens/splash';
import Dashboard from './src/screens/dashboard';

const Stack = createNativeStackNavigator();

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name={'Splash'}
            component={Splash}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name={'Dashboard'}
            component={Dashboard}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
