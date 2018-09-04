import React, { Component } from "react";
import { addNavigationHelpers } from "react-navigation";
import { NavigatorTabReddit } from "./navigationConfiguration";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";

import { bindActionCreators } from "redux";
import * as storyActions from "../../actions/StoryActions";

class TabMainNavigation extends Component {
  static navigationOptions = {
    tabBarLabel: "Reddit",
    tabBarIcon: ({ tintColor }) => (
      <Icon size={20} name={"reddit-alien"} color={tintColor} />
    )
  };

  render() {
    const { navigationState, dispatch } = this.props;
    return (
      <NavigatorTabReddit
        navigation={addNavigationHelpers({
          dispatch: dispatch,
          state: navigationState
        })}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    navigationState: state.tabReddit
  };
};

const mapDispatchToProps = dispatch => {
  const actionCreators = bindActionCreators(storyActions, dispatch);
  return {
    ...actionCreators,
    dispatch
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabMainNavigation);
