import { createStackNavigator } from '@react-navigation/stack';
import React from "react";

const MainStack = createStackNavigator();

const MainStackCreator = () => {
    return (
        <MainStack.Navigator headerMode="none" initialRouteName="Welcome">
            {/* Place your logged in routes here */ }
        </MainStack.Navigator>
    )
};

export default MainStackCreator;