/**
 * Button classes
 */
import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors } from "../assets/styles/Colors";
import { TextStyle } from "../assets/styles/TextStyle";
import * as Utils from '../lib/utils';
import * as FadeAnimation from './FadeAnimation';

class PrimaryButton extends Component {
  render () {
    return (
      <TouchableOpacity onPress={ this.props.onPress } disabled={ this.props.disabled || false }
        style={ [ localStyle.button, localStyle.primaryButton, this.props.buttonStyle ] }>
        <FadeAnimation.FadeIn duration={ this.props.fadeDuration || 1000 }>
          <Text style={ [ TextStyle.global.f18, TextStyle.global.fsb, localStyle.primaryButtonText, this.props.buttonTextStyle ] }>
            { this.props.buttonText }
          </Text>
        </FadeAnimation.FadeIn>
      </TouchableOpacity>
    )
  }
}

class WhiteButton extends Component {
  render () {
    return (
      <TouchableOpacity
        onPress={ this.props.onPress } disabled={ this.props.disabled || false }
        style={ [ localStyle.button, localStyle.whiteButton, this.props.buttonStyle ] }
      >
        <FadeAnimation.FadeIn duration={ this.props.fadeDuration || 1000 }>
          <Text style={ [ TextStyle.global.f18, TextStyle.global.fsb, localStyle.whiteButtonText, this.props.buttonTextStyle ] }>
            { this.props.buttonText }
          </Text>
        </FadeAnimation.FadeIn>
      </TouchableOpacity>
    )
  }
}

class WithIconButton extends Component {
  render () {
    return (
      <TouchableOpacity onPress={ this.props.onPress } disabled={ this.props.disabled || false }
        style={ [ localStyle.button, localStyle.whiteButton, this.props.buttonStyle ] }>
        <FadeAnimation.FadeIn duration={ this.props.fadeDuration || 1000 }
          style={ { flexDirection: 'row', paddingHorizontal: Utils.moderateScale(10) } }>
          <Image source={ this.props.icon } style={ [ {
            height: this.props.iconSize || Utils.moderateVerticalScale(15),
            width: this.props.iconSize || Utils.moderateVerticalScale(15),
            marginVertical: Utils.moderateVerticalScale(10)
          }, this.props.iconStyle ] } resizeMode="contain" resizeMethod="resize" />
          <Text
            style={ [ TextStyle.global.f18, TextStyle.global.fsb, localStyle.whiteButtonText, { marginHorizontal: 0 }, this.props.buttonTextStyle ] }>
            { this.props.buttonText }
          </Text>
        </FadeAnimation.FadeIn>
      </TouchableOpacity>
    )
  }
}

class WithIconButton2 extends Component {
  render () {
    return (
      <TouchableOpacity onPress={ this.props.onPress } disabled={ this.props.disabled || false }
        style={ [ localStyle.button, localStyle.whiteButton, this.props.buttonStyle ] }>
        <FadeAnimation.FadeIn duration={ this.props.fadeDuration || 1000 }
          style={ { flexDirection: 'row', paddingHorizontal: Utils.moderateScale(10) } }>
          <Text
            style={ [ TextStyle.global.f18, TextStyle.global.fsb, localStyle.whiteButtonText, { marginHorizontal: 0 }, this.props.buttonTextStyle ] }>
            { this.props.buttonText }
          </Text>
          <Image source={ this.props.icon } style={ [ {
            height: this.props.iconSize || Utils.moderateVerticalScale(15),
            width: this.props.iconSize || Utils.moderateVerticalScale(15),
            marginVertical: Utils.moderateVerticalScale(10),
          }, this.props.iconStyle ] } resizeMode="contain" resizeMethod="resize" />

        </FadeAnimation.FadeIn>
      </TouchableOpacity>
    )
  }
}

const localStyle = StyleSheet.create({
  button: {
    borderRadius: Utils.perfectSize(55 / 2),
    height: Utils.perfectSize(55),
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  whiteButtonText: {
    color: Colors.Primary,
    textAlign: "center",
    textAlignVertical: "center"
  },
  whiteButton: {
    backgroundColor: Colors.White,
    borderColor: Colors.Primary,
    borderWidth: Utils.moderateScale(1),
  },
  primaryButtonText: {
    color: Colors.White,
    textAlign: "center",
    textAlignVertical: "center"
  },
  primaryButton: {
    backgroundColor: Colors.Primary,
  },
});

export {
  WhiteButton,
  PrimaryButton,
  WithIconButton,
  WithIconButton2
}