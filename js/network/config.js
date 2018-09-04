export const API_ENDOINT = "https://hacker-news.firebaseio.com/v0/";

export const categoryEndPoint = category => {
  return API_ENDOINT + category + ".json";
};

export const itemEndPoint = id => {
  return API_ENDOINT + "item/" + id + ".json";
};

export const API_ENDOINT_REDDIT = "https://www.reddit.com/";

export const categoryEndPointReddit = category => {
  return API_ENDOINT_REDDIT + category + ".json";
};

export const itemEndPointReddit = id => {
  return API_ENDOINT_REDDIT + id + ".json";
};
