import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { darkTheme } from "../styles";

export const ScoreAndComments = ({ score, comments, type }) => {
  const { container, textContainer, text } = styles;

  if (type === "jobstories") return null;

  return (
    <View style={container}>
      <View style={textContainer}>
        <Text style={text}>{score}</Text>
        <Icon size={15} name={"chevron-up"} color={darkTheme.storyType} />
      </View>
      <View style={textContainer}>
        <Text style={text}>{comments}</Text>
        <Icon size={15} name={"comment"} color={darkTheme.storyType} />
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 5,
    // backgroundColor: 'red',
    width: 80
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: darkTheme.upvotesAndComments,
    paddingRight: 5,
    fontSize: 15,
    width: 60,
    fontWeight: "bold",
    textAlign: "right"
  }
};
