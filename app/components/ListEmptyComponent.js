import React, { Component } from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import * as Utils from "../lib/utils";
import { Images } from "../assets/images/index"
import { TextStyle } from "../assets/styles/TextStyle"
import { GlobalStyle } from "../assets/styles/GlobalStyle"

export default class ListEmptyComponent extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <View style={[LocalStyle.container, this.props.style]} >
        <Image source={Images.noData} style={LocalStyle.icon} resizeMethod="resize" resizeMode="contain" />
        <Text style={[TextStyle.global.title]}>{this.props.message || "No Data Found"}</Text>
      </View>
    );
  }
}

const LocalStyle = StyleSheet.create({
  container: {
    marginHorizontal: Utils.moderateScale(20),
    marginVertical: Utils.moderateVerticalScale(10),
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
  icon: {
    height: Utils.moderateScale(100),
    width: Utils.moderateScale(100),
  }
});

