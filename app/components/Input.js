/**
 * Input classes
 */
import React, { useEffect, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Dropdown } from 'react-native-material-dropdown';
import { Images } from "../assets/images";
import { Colors } from "../assets/styles/Colors";
import { TextStyle } from "../assets/styles/TextStyle";
import * as Utils from "../lib/utils";

const FloatingTextInput = (props) => {

    const [ isFocused, setIsFocused ] = useState((props.value == undefined || props.value == null || props.value == '') ? false : true)
    const [ secureTextEntry, setSecureTextEntry ] = useState((props.secureTextEntry == undefined || props.secureTextEntry == null || props.secureTextEntry == '') ? false : true)
    const [ value, setValue ] = useState(props.value)

    useEffect(() => {
        setValue(props.value)
        setSecureTextEntry(props.secureTextEntry)
        setIsFocused((props.value == undefined || props.value == null || props.value == '') ? false : true)
    }, [ props ])

    const { label, errorMessage } = props;
    const labelStyle = {
        position: 'absolute',
        left: Utils.perfectSize(25),
        top: Utils.perfectSize(-12),
        fontSize: Utils.perfectSize(14),
        color: Colors.Primary,
        backgroundColor: props.labelBackgroundColor || Colors.White,
    };

    return (
        <View style={ [ { marginTop: Utils.perfectSize(isFocused ? 30 : 20), width: '90%' }, props.containerStyle ] }>
            <View style={ [ { paddingHorizontal: Utils.moderateScale(15), width: '90%', height: Utils.perfectSize(55), alignContent: 'center', alignItems: "flex-start", justifyContent: 'center', borderRadius: Utils.perfectSize(30), borderWidth: Utils.perfectSize(2), borderColor: (errorMessage ? Colors.BorderError : (isFocused ? Colors.BorderActive : Colors.BorderInactive)) }, props.innerContainerStyle ] }>
                { isFocused ? <Text style={ labelStyle }> { label } </Text> : null }
                <View style={ {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: Utils.perfectSize(isFocused ? 10 : 0)
                } }>
                    <TextInput
                        value={ value }
                        secureTextEntry={ secureTextEntry }
                        placeholder={ !isFocused ? label : '' }
                        placeholderTextColor={ Colors.BorderInactive }
                        underlineColorAndroid="transparent"
                        style={ { borderBottomWidth: 0, color: Colors.PrimaryText, height: '95%', width: (props.secureTextEntry ? '80%' : '100%'), fontSize: Utils.perfectSize(16), marginHorizontal: Utils.perfectSize(10), textAlignVertical: 'center' } }
                        ref={ typeof props.refCallback === 'function' ? props.refCallback : () => { } }
                        onChangeText={ (newText) => { setValue(newText); props.onChangeText(newText) } }
                        returnKeyType={ props.returnKeyType || "next" }
                        keyboardType={ props.keyboardType || "default" }
                        blurOnSubmit={ props.blurOnSubmit == false ? false : true }
                        editable={ props.editable === false ? false : true }
                        maxLength={ props.maxLength ? props.maxLength : undefined }
                        autoCapitalize={ props.autoCapitalize || 'sentences' }
                        autoCorrect={ props.autoCorrect || false }
                        onFocus={ () => { setIsFocused(true); typeof props.onFocus === 'function' && props.onFocus(); } }
                        onBlur={ () => { setIsFocused((value == undefined || value == null || value == '') ? false : true); } }
                        onKeyPress={ typeof props.onKeyPress === 'function' ? props.onKeyPress : () => { } }
                        onSubmitEditing={ typeof props.onSubmitEditing === 'function' ? props.onSubmitEditing : () => { } }
                    />
                    { props.secureTextEntry && <TouchableOpacity
                        style={ { height: '95%', width: '10%', justifyContent: 'center', alignContent: 'center', alignItems: 'center' } }
                        onPress={ () => setSecureTextEntry(!secureTextEntry) }>
                        <Image source={ secureTextEntry ? Images.eyeClose : Images.eyeOpen } style={ { width: Utils.perfectSize(50), height: Utils.perfectSize(50), alignSelf: 'center' } } resizeMethod="auto" resizeMode="contain" />
                    </TouchableOpacity> }
                </View>
            </View>
            {errorMessage && <Text style={ [ TextStyle.global.f14, TextStyle.global.textCenter, { color: Colors.Error, marginTop: Utils.moderateVerticalScale(5) } ] }>{ errorMessage }</Text> }
        </View>
    );
}

const FloatingTextBoxInput = (props) => {

    const [ isFocused, setIsFocused ] = useState((props.value == undefined || props.value == null || props.value == '') ? false : true)
    const [ secureTextEntry, setSecureTextEntry ] = useState(props.secureTextEntry)
    const [ value, setValue ] = useState(props.value)

    useEffect(() => {
        setValue(props.value)
        setSecureTextEntry(props.secureTextEntry)
        setIsFocused((props.value == undefined || props.value == null || props.value == '') ? false : true)
    }, [ props ])

    const { label, errorMessage } = props;
    const labelStyle = {
        position: 'absolute',
        left: Utils.perfectSize(-0),
        top: Utils.perfectSize(-21),
        fontSize: Utils.perfectSize(14),
        color: Colors.PrimaryText,
        backgroundColor: props.labelBackgroundColor || Colors.White,
    };

    return (
        <View style={ { marginVertical: Utils.perfectSize(10), width: '100%' } }>
            <View style={ { width: '100%', height: Utils.perfectSize(90), alignContent: 'center', alignItems: "flex-start", justifyContent: 'center', borderRadius: Utils.perfectSize(12), borderBottomWidth: Utils.perfectSize(2), borderColor: (errorMessage ? Colors.BorderError : (isFocused ? Colors.BorderActive : Colors.BorderActive)) } }>
                { isFocused && <Text style={ labelStyle }> { label } </Text> }
                <View style={ {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: Utils.perfectSize(isFocused ? 10 : 0)
                } }>
                    <TextInput
                        value={ value }
                        secureTextEntry={ secureTextEntry }
                        placeholder={ !isFocused ? label : '' }
                        placeholderTextColor={ Colors.BorderInactive }
                        underlineColorAndroid="transparent"
                        style={ { borderBottomWidth: 0, color: Colors.PrimaryText, height: Utils.perfectSize(75), width: (props.secureTextEntry ? '80%' : '100%'), fontSize: Utils.perfectSize(16), marginHorizontal: Utils.perfectSize(5), textAlignVertical: 'top' } }
                        multiline={ true }
                        numberOfLines={ 3 }
                        ref={ typeof props.refCallback === 'function' ? props.refCallback : () => { } }
                        onChangeText={ (newText) => { setValue(newText); props.onChangeText(newText) } }
                        returnKeyType={ props.returnKeyType || "next" }
                        keyboardType={ props.keyboardType || "default" }
                        blurOnSubmit={ props.blurOnSubmit == false ? false : true }
                        editable={ props.editable === false ? false : true }
                        maxLength={ props.maxLength ? props.maxLength : undefined }
                        autoCapitalize={ props.autoCapitalize || 'sentences' }
                        autoCorrect={ props.autoCorrect || false }
                        onFocus={ () => { setIsFocused(true); typeof props.onFocus === 'function' && props.onFocus(); } }
                        onBlur={ () => { setIsFocused((value == undefined || value == null || value == '') ? false : true); } }
                        onKeyPress={ typeof props.onKeyPress === 'function' ? props.onKeyPress : () => { } }
                        onSubmitEditing={ typeof props.onSubmitEditing === 'function' ? props.onSubmitEditing : () => { } }
                    />
                    { props.secureTextEntry && <TouchableOpacity
                        style={ { height: '95%', width: '10%', justifyContent: 'center', alignContent: 'center', alignItems: 'center' } }
                        onPress={ () => setSecureTextEntry(!secureTextEntry) }>
                        <Image source={ secureTextEntry ? Images.eyeClose : Images.eyeOpen } style={ { width: Utils.perfectSize(50), height: Utils.perfectSize(50), alignSelf: 'center' } } resizeMethod="auto" resizeMode="contain" />
                    </TouchableOpacity> }
                </View>
            </View>
            {errorMessage && <Text style={ [ TextStyle.global.f14, TextStyle.global.textCenter, { color: Colors.Error, marginTop: Utils.moderateVerticalScale(5) } ] }>{ errorMessage }</Text> }
        </View>
    );
}

const FloatingDropDown = (props) => {
    const [ isSelected, setIsSelected ] = useState((props.value == undefined || props.value == null || props.value == '') ? false : true)
    const [ selected, setSelected ] = useState(null)
    const [ isFocused, setIsFocused ] = useState((props.value == undefined || props.value == null || props.value == '') ? false : true)

    const { label, errorMessage } = props;

    useEffect(() => {
        setIsSelected((props.value == undefined || props.value == null || props.value == '') ? false : true)
        setIsFocused((props.value == undefined || props.value == null || props.value == '') ? false : true)
    }, [ props ])

    const labelStyle = {
        position: 'absolute',
        left: Utils.perfectSize(25),
        top: Utils.perfectSize(-12),
        fontSize: Utils.perfectSize(14),
        color: Colors.BorderActive,
        backgroundColor: props.labelBackgroundColor || Colors.White,
    };

    return (
        <View style={ [ { marginTop: Utils.perfectSize(isFocused ? 30 : 20), width: '90%' }, props.containerStyle ] }>
            { console.log("label", label) }
            <View style={ [ { paddingHorizontal: Utils.moderateScale(15), width: '100%', height: Utils.perfectSize(55), alignContent: 'center', alignItems: "flex-start", justifyContent: 'center', borderRadius: Utils.perfectSize(30), borderWidth: Utils.perfectSize(2), borderColor: (errorMessage ? Colors.BorderError : (isFocused ? Colors.BorderActive : Colors.BorderInactive)) }, props.innerContainerStyle ] }>
                { (isSelected || isFocused || !(props.value == undefined || props.value == null || props.value == '')) && <Text style={ labelStyle }> { label } </Text> }
                <View style={ {
                    padding: 0,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: Utils.perfectSize(isSelected ? 10 : 0),
                    paddingLeft: Utils.moderateScale(8),
                    width: '100%'
                } }>
                    <Dropdown
                        label={ (!isSelected && (props.value == undefined || props.value == null || props.value == '')) ? label : ((selected == undefined || selected == null || selected == '') ? props.value : '') }
                        data={ props.data }
                        valueExtractor={ typeof props.valueExtractor === 'function' ? props.valueExtractor : item => item.id }
                        labelExtractor={ typeof props.labelExtractor === 'function' ? props.labelExtractor : item => item.name }
                        disabled={ props.editable === false ? true : false }
                        lineWidth={ 0 }
                        onChangeText={ (newText) => { setSelected(newText); props.onChangeText(newText) } }
                        useNativeDriver={ true }
                        textColor={ (selected == undefined || selected == null || selected == '') ? Colors.BorderInactive : (props.editable || isSelected || isFocused) ? Colors.PrimaryText : Colors.BorderInactive }

                        itemColor={ (props.editable || isSelected || isFocused) ? Colors.PrimaryText : Colors.BorderInactive }

                        selectedItemColor={ Colors.PrimaryText }

                        itemTextStyle={ { fontSize: Utils.perfectSize(16), textAlign: 'left', marginHorizontal: Utils.perfectSize(15), textAlignVertical: 'center' } }

                        overlayStyle={ { marginRight: Utils.perfectSize(15), marginLeft: Utils.perfectSize(props.leftMargin || 0) } }

                        style={ { marginRight: Utils.perfectSize(15), marginLeft: Utils.perfectSize(props.leftMargin || 0), textAlignVertical: 'center', justifyContent: 'space-between' } }

                        baseColor={ (props.editable || isSelected || isFocused) ? Colors.PrimaryText : Colors.BorderInactive }

                        labelFontSize={ Utils.perfectSize(16) }

                        labelTextStyle={ { fontSize: Utils.perfectSize(16), textAlign: 'left', marginRight: Utils.perfectSize(15), marginLeft: Utils.perfectSize(props.leftMargin || 0), textAlignVertical: 'center', color: ((props.editable || isSelected || isFocused) ? Colors.PrimaryText : Colors.BorderInactive) } }

                        dropdownOffset={ { top: Utils.perfectSize(selected != "" ? 0 : 0), left: 0 } }

                        dropdownMargins={ { min: 0, max: 0 } }

                        pickerStyle={ [ { width: '70%', height: Utils.moderateVerticalScale(250), paddingHorizontal: 10 }, props.pickerStyle ] }

                        containerStyle={ { width: '100%', borderEndWidth: 0, height: '75%', justifyContent: 'flex-start', marginTop: Utils.perfectSize(5), margin: 0 } }

                        renderAccessory={ () => <Image source={ Images.arrowDown } style={ [ { marginTop: Utils.moderateVerticalScale(8), width: Utils.perfectSize(16), height: Utils.perfectSize(16), resizeMode: 'contain', tintColor: (props.editable || (isSelected || isFocused) ? Colors.PrimaryText : Colors.BorderInactive), marginRight: Utils.perfectSize(10) }, props.renderAccessoryStyle ] } /> }
                    />
                </View>
            </View>
            {errorMessage && <Text style={ [ TextStyle.global.f18, { color: Colors.Error } ] }>{ errorMessage }</Text> }
        </View>
    );
}


export {
    FloatingTextInput,
    FloatingTextBoxInput,
    FloatingDropDown
};
