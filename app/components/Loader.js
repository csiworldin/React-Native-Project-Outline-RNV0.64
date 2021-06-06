import React, {Component} from "react";
import {Image, Modal, StyleSheet, Text, View} from "react-native";
import { Colors } from "../assets/styles/Colors";
import * as Utils from "../lib/utils";

export default class Loader extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      this.props.loading && (
        <Modal
          transparent={true}
          animationType={"fade"}
          visible={this.props.loading}
          onRequestClose={() => {
          }}
        >
          <View style={style.modalBackground}>
            <View
              style={[
                style.activityIndicatorWrapper,
                this.props.message &&
                this.props.message.length > 0 &&
                style.activityIndicatorWrapperWidthHeight
              ]}
            >
              <Image source={require('../assets/images/img/loader.gif')} style={{
                height: Utils.moderateVerticalScale(75),
                width: Utils.moderateVerticalScale(75)
              }} />
              {this.props.message && this.props.message.length > 0 ? (
                <Text style={style.message}>{this.props.message}</Text>
              ) : null}
            </View>
          </View>
        </Modal>
      )
    );
  }
}

const style = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#d8d0c969"
  },
  activityIndicatorWrapper: {
    backgroundColor: "#d8d0c969",
    flex:1,
    width: '100%',
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around"
  },
  activityIndicatorWrapperWidthHeight: {
    height: Utils.moderateScale(110),
    width: Utils.moderateScale(225)
  },
  message: {
    color: Colors.Primary,
    width: '100%',
    textAlign:'center',
    fontSize: Utils.moderateScale(14)
  }
});
