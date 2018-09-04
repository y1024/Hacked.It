import React, { PureComponent } from "react";
import {
  FlatList,
  RefreshControl,
  View,
  ActivityIndicator,
  StatusBar,
  Animated,
  Easing,
  Alert
} from "react-native";
import { connect } from "react-redux";
import StoryListItem from "./StoryListItem";
import { darkTheme } from "../../styles";
import AdMobBannerView from "../../components/AdMobBannerView";

const placeholderArray = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19
];

export class StoryList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      leftActionActivated: false,
      toggle: false,
      hasAd: true
    };
    this.animatedValue = new Animated.Value(0);
  }

  handleTitlePress = (story, pageY) => {
    const { navigation, route } = this.props;
    navigation.navigate(route, { story, pageY });
  };

  _keyExtractor = item => (item.id ? item.id : item);

  handleLeftActionActivate = () => {
    this.setState({ leftActionActivated: true });
    this.animatePullToSave(1);
  };

  handleLeftActionDeactivate = () => {
    this.animatePullToSave(0);
    this.setState({ leftActionActivated: false });
  };

  handleLeftActionComplete = item => {
    this.setState({ toggle: !this.state.toggle });
    this.props.handleLeftActionComplete(item);
  };

  animatePullToSave = toValue => {
    Animated.timing(this.animatedValue, {
      toValue,
      duration: 750,
      easting: Easing.linear
    }).start();
  };

  _renderItem = ({ item, index }) => {
    const { route } = this.props;

    if (item.ad !== undefined) {
      return <View style={{ flex: 1, width: "100%" }} />;
    }

    return (
      <View>
        <StoryListItem
          id={item.id}
          story={item}
          navigation={this.props.navigation}
          handleTitlePress={this.handleTitlePress}
          route={route}
        />
        {index % 8 == 0 && <AdMobBannerView />}
      </View>
    );
  };

  _renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: darkTheme.storyDividingLine
        }}
      />
    );
  };

  _renderFooter = () => {
    if (!this.props.isLoading) return null;

    return (
      <View style={{ paddingVertical: 20 }}>
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  handleOnEndReached = () => {
    this.props.handleLoadMore();
  };

  handleOnRefresh = () => {
    this.props.handleRefresh();
  };

  render() {
    const { stories, refreshing, route } = this.props;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: darkTheme.tabInactiveBackground
        }}
      >
        <StatusBar barStyle="light-content" />
        <FlatList
          style={{ backgroundColor: darkTheme.tabInactiveBackground }}
          keyExtractor={this._keyExtractor}
          data={
            stories.length > 0
              ? stories
              : route === "Favorites"
                ? []
                : placeholderArray
          }
          renderItem={this._renderItem}
          initialNumToRender={20}
          ItemSeparatorComponent={this._renderSeparator}
          ListFooterComponent={this._renderFooter}
          onEndReached={this.handleOnEndReached}
          onEndReachedThreshold={1}
          removeClippedSubviews={false}
          indicatorStyle={"white"}
          scrollEnabled={!this.state.isSwiping}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={this.handleOnRefresh}
              tintColor={darkTheme.storyType}
            />
          }
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { byId } = state.favorites;
  return { byId };
};

export default connect(mapStateToProps)(StoryList);
