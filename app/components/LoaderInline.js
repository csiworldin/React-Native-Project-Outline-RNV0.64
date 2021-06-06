import React, {Component} from "react";
import {StyleSheet, View} from "react-native";
import * as Utils from "../lib/utils";
import ContentLoader from "react-native-easy-content-loader";
import { Colors } from "../assets/styles/Colors";

export default class LoaderInline extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      this.props.loading && (
        <View style={[style.loading, this.props.style]}>
          <ContentLoader
            containerStyles={{ height: (this.props.height || Utils.height / 5), position: 'relative', paddingVertical: Utils.moderateVerticalScale(10) }}
            reverse
            pRows={5}
            pHeight={[5, 10, 20, 5, 5]}
            loading={true}
            active={true}
            pWidth={[100, 100]}
            listSize={this.props.listSize || 4}
          />
        </View>
      )
    );
  }
}

const style = StyleSheet.create({
  loading: {
    height: '100%',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:Colors.White
  }
});
