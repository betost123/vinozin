import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthenticateScreen from '../screens/authentication/Authenticate';
import LogInScreen from '../screens/authentication/LogInScreen';
import RegisterAccountScreen from '../screens/authentication/RegisterAccount';

const AppStack = createNativeStackNavigator();

export const AuthNavigation = () => {
  return (
    <AppStack.Navigator
      initialRouteName="AuthOptions"
      screenOptions={{headerShown: false}}>
      <AppStack.Group>
        <AppStack.Screen name="AuthOptions" component={AuthenticateScreen} />
        <AppStack.Screen name="LogIn" component={LogInScreen} />
        <AppStack.Screen name="Register" component={RegisterAccountScreen} />
      </AppStack.Group>
    </AppStack.Navigator>
  );
};
