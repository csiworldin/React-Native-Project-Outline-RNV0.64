import React, { useState, useEffect } from "react";
import { Dimensions, Image, PermissionsAndroid, StyleSheet, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { GlobalStyle } from "../assets/styles/GlobalStyle";
import { Images } from "../assets/images";
import { Colors } from "../assets/styles/Colors";
import { TextStyle } from "../assets/styles/TextStyle";
import * as Buttons from "../components/Button";
import * as Utils from "./utils";

import { Modal, ModalContent } from 'react-native-modals';

const PopUpModal = (props) => {
    const [showModal, setShowModal] = useState(props.show);

    useEffect(() => {
        setShowModal(props.show)
    }, [props])

    return (
        <Modal
            visible={showModal}
            onTouchOutside={() => {
                setShowModal(false)
            }}
            width={(Utils.width - Utils.moderateScale(30))}
        >
            <ModalContent>
                <View style={{ width: '100%', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                    <Text style={[TextStyle.global.f18, TextStyle.global.fb, TextStyle.global.textCenter, { width: '100%' }]}>{props.message}</Text>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '90%', alignItems: 'center', marginTop: Utils.moderateVerticalScale(25) }}>
                        <Buttons.WhiteButton onPress={typeof props.onCancelPress === 'function' ? props.onCancelPress : () => { }} buttonText={props.cancelText || "Cancel"} buttonStyle={{ width: '40%', alignSelf: 'center', backgroundColor: 'transparent', borderColor: 'transparent', justifyContent: 'center', alignContent: 'flex-start', alignItems: 'flex-start' }} buttonTextStyle={{ color: Colors.Black, textAlign: 'left' }} />
                        <View style={{ width: '40%' }}>
                            <Buttons.PrimaryButton onPress={typeof props.onPress === 'function' ? props.onPress : () => { }}
                                buttonText={props.okayText || "Okay"} buttonStyle={{ width: '100%', height: Utils.perfectSize(40) }} />
                        </View>
                    </View>
                </View>
            </ModalContent>
        </Modal>
    );
}


export {
    PopUpModal
};
