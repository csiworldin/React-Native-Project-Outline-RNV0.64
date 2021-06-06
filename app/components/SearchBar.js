import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import { TextStyle } from "../assets/styles/TextStyle";
import * as Utils from "../lib/utils";
import { Images } from "../assets/images";
import { Colors } from "../assets/styles/Colors";

const SearchBar = (props) => {
    const [ searchText, setSearchText ] = useState(props.searchTextString || '')

    const doSearch = (clear = false) => {
        if (clear) { setSearchText('') }
        props.searchableText(searchText);
    }

    return (
        <View style={ [ { width: (props.width || '100%'), height: Utils.perfectSize(props.height || 43), alignContent: 'center', alignItems: "flex-start", justifyContent: 'center', borderRadius: Utils.perfectSize(22), borderColor: Colors.Border, borderWidth: Utils.perfectSize(1), backgroundColor: Colors.White, marginBottom: Utils.moderateVerticalScale(10) }, props.containerStyle ] }>

            <View style={ { flexDirection: 'row', justifyContent: 'space-around' } }>
                <View style={ { height: '95%', width: '10%', justifyContent: 'center', alignContent: 'center', alignItems: 'center' } }>
                    <Image source={ Images.search } style={ { width: Utils.perfectSize(12), height: Utils.perfectSize(12), alignSelf: 'center' } } resizeMethod="auto" resizeMode="contain" />
                </View>
                <TextInput
                    placeholder={ props.placeholder || 'Search' }
                    placeholderTextColor={ Colors.Border }
                    underlineColorAndroid="transparent"
                    style={ { borderWidth: 0, color: Colors.BorderActive, height: '95%', width: (searchText != "" ? '80%' : '80%'), fontSize: Utils.perfectSize(16), marginHorizontal: Utils.perfectSize(5), textAlignVertical: 'center' } }
                    value={ searchText }
                    onChangeText={ (searchText) => { setSearchText(searchText) } }
                    returnKeyType={ "done" }
                    blurOnSubmit={ true }
                    onBlur={ () => { } }
                    onKeyPress={ () => { } }
                    onSubmitEditing={ () => doSearch() }
                />
                { searchText == "" ? <TouchableOpacity
                    style={ { height: '95%', width: '10%', justifyContent: 'center', alignContent: 'center', alignItems: 'center' } }
                    onPress={ () => { props.voiceSearch() } }>
                    <Image source={ Images.searchMic } style={ { width: Utils.perfectSize(12), height: Utils.perfectSize(18), alignSelf: 'center' } } resizeMethod="auto" resizeMode="contain" />
                </TouchableOpacity> : <TouchableOpacity
                    style={ { height: '95%', width: '10%', justifyContent: 'center', alignContent: 'center', alignItems: 'center' } }
                    onPress={ () => { doSearch(true); props.clearSearch() } }>
                    <Image source={ Images.clearSearch } style={ { width: Utils.perfectSize(12), height: Utils.perfectSize(12), alignSelf: 'center' } } resizeMethod="auto" resizeMode="contain" />
                </TouchableOpacity> }
            </View>
        </View>
    )
}

export { SearchBar };

