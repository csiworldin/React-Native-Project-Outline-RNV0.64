import { StyleSheet } from "react-native";
import * as Utils from "../../lib/utils";
import { Colors } from "./Colors";

export const TextStyle = {
    global: StyleSheet.create({
        f25: {
            fontSize: Utils.perfectSize(25)
        },
        f18: {
            fontSize: Utils.perfectSize(18)
        },
        f16: {
            fontSize: Utils.perfectSize(16)
        },
        f14: {
            fontSize: Utils.perfectSize(14)
        },
        f12: {
            fontSize: Utils.perfectSize(12)
        },
        fb: {
            fontFamily: 'Nunito-Bold'
        },
        textCenter: {
            textAlign: 'center'
        },
        fr: {
            fontFamily: 'Nunito-Regular'
        },
        fsb: {
            fontFamily: 'Nunito-SemiBold'
        },
        feb: {
            fontFamily: 'Nunito-ExtraBold'
        }
    })
};
