import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const AuthStackCreator = () => {
    return (
        <AuthStack.Navigator headerMode="none" >
            {/* Place your auth routes here */}
        </AuthStack.Navigator>
    )
};

export default AuthStackCreator;