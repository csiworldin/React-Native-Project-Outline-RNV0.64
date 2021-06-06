import React, { useEffect, useState } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import ScreenOrientation, { PORTRAIT } from "react-native-orientation-locker/ScreenOrientation";
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from "react-redux";
import { ActionCreators } from "../actions/index";
import { Colors } from "../assets/styles/Colors";
import { GlobalStyle } from "../assets/styles/GlobalStyle";
import Loader from "../components/Loader";
import * as Utils from "../lib/utils";

const WelcomeScreen = (props) => {
    const [ isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        setIsLoading(false);
    }, [ props ])

    return (
        <SafeAreaView style={ [ GlobalStyle.container, LocalStyle.container ] }>
            <StatusBar backgroundColor={ Colors.StatusBarColors[ 1 ] } />
            <ScreenOrientation orientation={ PORTRAIT } />
            <View style={ [ GlobalStyle.header, { backgroundColor: 'transparent' } ] }>
                <View style={ GlobalStyle.headerBody }>
                    <Text adjustsFontSizeToFit style={ GlobalStyle.headerText, { textAlign: 'center', width: '100%' } }>Welcome</Text>
                </View>
            </View>
            { isLoading ? <Loader loading={ isLoading } /> : null }
            <View style={ { flex: 1, width: '100%', paddingHorizontal: Utils.moderateScale(15) } }>
                <Text adjustsFontSizeToFit style={ GlobalStyle.headerText, { textAlign: 'center', width: '100%' } }>Welcome to React Native</Text>
            </View>
        </SafeAreaView>
    )
}

const LocalStyle = StyleSheet.create({
    container: {
        backgroundColor: Colors.Background,
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
    },
});

const mapStateToProps = state => {
    return {
        userData: state.appData.userData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setLoggedInUserData: data => dispatch(ActionCreators.setLoggedInUserData(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);
