import React, { Component } from "react";
import { View, Platform } from "react-native";
import { AdMobBanner } from "react-native-admob";
import { darkTheme } from "../styles";

// Test ID
const AD_UNIT_ID = "ca-app-pub-3940256099942544/6300978111";
// const AD_UNIT_ID =
//   Platform.OS == "ios"
//     ? "***"
//     : "***";

class AdMobBannerView extends Component {
  state = {
    shouldShow: true
  };

  render() {
    return this.state.shouldShow ? (
      <View
        style={{
          paddingTop: 1,
          backgroundColor: darkTheme.storyDividingLine,
          height: 100,
          width: "100%",
          alignItems: "center"
        }}
      >
        <AdMobBanner
          bannerSize="largeBanner"
          adUnitID={AD_UNIT_ID}
          didFailToReceiveAdWithError={e => {
            this.setState({ shouldShow: false });
          }}
        />
      </View>
    ) : null;
  }
}

module.exports = AdMobBannerView;
