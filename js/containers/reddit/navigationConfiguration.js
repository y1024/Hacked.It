import { StackNavigator } from "react-navigation";
import StoriesContainer from "./StoriesContainer";
import Story from "../story/Story";
import { transitionConfiguration } from "../../utils/animations/transitions";
import { darkTheme } from "../../styles";

const routeConfiguration = {
  RedditContainer: { screen: StoriesContainer },
  RedditStory: { screen: Story }
};

const stackNavigatorConfiguration = {
  initialRouteName: "RedditContainer",
  key: "reddit",
  navigationOptions: {
    headerBackTitle: null
  },
  gesturesEnabled: true,
  transitionConfig: transitionConfiguration,
  cardStyle: {
    backgroundColor: darkTheme.headerBackground
  }
};

export const NavigatorTabReddit = StackNavigator(
  routeConfiguration,
  stackNavigatorConfiguration
);
