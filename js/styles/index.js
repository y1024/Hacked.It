export const red = '#ff6666';
export const blue = '#3498db';
export const green = '#2ecc71';
export const midnightBlue = backgroundColor;
export const lightGray = '#ecf0f1';
export const iOSBlue = '#007aff';
export const pistachioGreen = '#98c379';
export const malibu = '#61afef';
export const chalky = '#e5c07b';
export const softPurple = '#C678DD';
export const cadetBlue = '#ABB2BF';
export const froly = '#e06c75';

export const colors = {
  red,
  blue,
  green,
  midnightBlue,
  lightGray,
  iOSBlue
};

const backgroundColor = "#030303";
const backgroundSecondColor = "#1A1A1B";
const orange = "#F23E18";
const yellow = "#eccc68";

export const darkTheme = {
  tabActiveBackground: backgroundSecondColor,
  tabInactiveBackground: backgroundColor,
  tabActiveIconTint: 'white',
  tabInactiveIconTint: 'lightgray',
  tabBarOutline: '#535353',
  headerBackground: backgroundColor,
  headerTitle: 'white',
  headerBackButton: 'white',

  tabBarUnderlineColor: 'white',

  storyTitle: "#D8DADC",
  storyAuthor: chalky,
  storyTimeAgo: cadetBlue,
  storyDivider: froly,
  headerCommentBackground: backgroundColor,
  storyBackground: backgroundColor /* #2d323b */,
  storyType: yellow,
  storyDividingLine: backgroundSecondColor,

  pullToSaveStory: pistachioGreen,
  savedStory: chalky,

  upvotesAndComments: yellow,
  comments: softPurple,

  storyPlaceholderBackground: backgroundSecondColor,
  commentText: '#bdc3c7',
  commentURL: pistachioGreen,

  twitter: '#00aced',
  facebook: '#3b5998',
  whatsapp: '#25d366',
  googleplus: '#dd4b39',
  email: '#d7d7d8',
  copylink: '#c4dff6'
};

export const lightTheme = {
  tabActiveBackground: backgroundSecondColor,
  tabInactiveBackground: backgroundColor,
  tabActiveIconTint: blue,
  tabInactiveIconTint: 'lightgray',

  headerBackground: 'white',
  headerTitle: midnightBlue,

  storyTitle: midnightBlue,
  storyAuthor: blue,
  storyTimeAgo: 'gray',
  storyDivider: '#abb2bf',
  storyBackground: 'white',
  storyType: green,
  storyDividingLine: '#eee',

  upvotesAndComments: midnightBlue,
  comments: 'lightgray',

  storyPlaceholderBackground: 'white'
};

const styles = {
  colors
};

export default styles;
