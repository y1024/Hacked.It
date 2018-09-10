import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Linking,
  Platform
} from "react-native";
import { darkTheme } from "../../styles";
import { openTypeform } from "../../network/web";

export default class MoreContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: false
    };
  }

  static navigationOptions = () => ({
    title: "About".toUpperCase(),
    headerTitleStyle: { color: darkTheme.headerTitle },
    headerStyle: { backgroundColor: darkTheme.headerBackground }
  });

  setModalState = currency => {
    const isModalVisible = !this.state.isModalVisible;
    this.setState({ isModalVisible, currency });
  };

  handleOnPress = currency => {
    this.setModalState(currency);
  };

  handleSourceCodeOnPress = () => {
    Linking.openURL("https://github.com/longsangstan/Hacked.It").catch(
      () => {}
    );
  };

  handleReviewOnPress = () => {
    Linking.openURL(
      "https://itunes.apple.com/app/id1419109543?action=write-review&mt=8"
    ).catch(() => {});
  };

  handleContactOnPress = () => {
    Linking.openURL("https://clss.hk/?utm_source=hackedit").catch(() => {});
  };

  render() {
    const {
      container,
      donateContainer,
      donateHeadline,
      body,
      contact,
      textContainer
    } = styles;

    return (
      <ScrollView
        style={{ backgroundColor: darkTheme.storyBackground }}
        contentContainerStyle={container}
      >
        <View style={textContainer}>
          <Text style={donateHeadline}>About</Text>
          <Text style={body}>
            A minimalist dark mode reader for hacker news, based on
            RCiesielczuk's HackerBuzz.
          </Text>
        </View>
        <View style={textContainer}>
          <Text style={donateHeadline}>Source Code</Text>
          <TouchableOpacity onPress={this.handleSourceCodeOnPress}>
            <Text style={contact}>Check it out here!</Text>
          </TouchableOpacity>
        </View>
        <View style={[textContainer, { marginBottom: 0 }]}>
          <Text style={donateHeadline}>Contact</Text>
          <TouchableOpacity onPress={this.handleContactOnPress}>
            <Text style={contact}>Tap here!</Text>
          </TouchableOpacity>
        </View>
        {Platform.OS == "ios" ? (
          <View style={donateContainer}>
            <View style={textContainer}>
              <Text style={donateHeadline}>Any feedback?</Text>
              <TouchableOpacity onPress={this.handleReviewOnPress}>
                <Text style={contact}>Write a review here!</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column",
    backgroundColor: darkTheme.storyBackground,
    backfaceVisibility: "visible"
  },
  donateContainer: {
    justifyContent: "space-between",
    flexDirection: "column",
    marginBottom: 25
  },
  donateHeadline: {
    fontSize: 30,
    fontWeight: "400",
    color: darkTheme.storyAuthor
  },
  currenciesContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 10
  },
  currencyContainer: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "lightgray",
    padding: 5,
    justifyContent: "space-between",
    flexDirection: "column",
    margin: 10
  },
  currency: {
    color: "white",
    fontSize: 25,
    fontWeight: "500",
    alignSelf: "center",
    marginTop: 5
  },
  body: {
    marginTop: 5,
    marginRight: 5,
    fontSize: 20,
    fontWeight: "300",
    color: darkTheme.storyTimeAgo
  },
  contact: {
    marginTop: 5,
    fontSize: 20,
    fontWeight: "500",
    color: darkTheme.storyTimeAgo
  },
  textContainer: {
    marginLeft: 10,
    marginTop: 10
  },
  image: {
    marginTop: 5,
    width: 40,
    height: 40,
    tintColor: darkTheme.storyTimeAgo,
    alignSelf: "center"
  }
});
