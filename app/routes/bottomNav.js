import React from "react";
import { View, StyleSheet } from "react-native";
import * as Utils from "../lib/utils";
import { Colors } from "../assets/styles/Colors";

const BottomNav = (props) => {
    const navigation = props.props.navigation;
    return (
        <View style={ LocalStyle.bottomTabContainer } >
            {/* Place your custom bottom nav button and icon here here */ }
        </View>
    )
}

const LocalStyle = StyleSheet.create({
    bottomTabContainer: {
        justifyContent: 'space-between',
        paddingHorizontal: Utils.perfectSize(25),
        paddingVertical: Utils.perfectSize(5),
        flexDirection: 'row',
        width: '100%',
        backgroundColor: Colors.White,
        height: Utils.perfectSize(69),
        bottom: 0,
    },
    bottomTabIconContainer: {
        height: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    bottomTabIcon: {
        alignSelf: 'center',
        width: Utils.perfectSize(24),
        height: Utils.perfectSize(24)
    },
    bottomTabIconText: {
        fontSize: Utils.perfectSize(14),
        textAlign: 'center',
        textAlignVertical: 'center'
    },
})

export { BottomNav }