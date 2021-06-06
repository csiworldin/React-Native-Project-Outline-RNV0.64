import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import AuthStackCreator from "./auth";
import MainStackCreator from './mainMenu';

const RootStack = createStackNavigator();

const RootStackCreator = ({ signedIn }) => {
  return <RootStack.Navigator headerMode="none" initialRouteName={signedIn ? "Main" : "Auth"} >
    <RootStack.Screen name="Auth" component={AuthStackCreator} />
    <RootStack.Screen name="Main" component={MainStackCreator} />
  </RootStack.Navigator>
};

export default RootStackCreator;