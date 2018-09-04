import {
  itemEndPoint,
  categoryEndPoint,
  itemEndPointReddit,
  categoryEndPointReddit
} from "./config";
import {
  getRedditIds,
  convertRedditItemToHNFormat,
  convertRedditCommentToHNFormat
} from "./util";

export function getItem(id) {
  const isReddit = typeof id === "string";
  const endPoint = isReddit ? itemEndPointReddit : itemEndPoint;

  return fetch(endPoint(id))
    .then(response => response.json())
    .then(story => {
      story = isReddit ? convertRedditItemToHNFormat(story) : story;

      return story;
    });
}

export function getStories(category) {
  const isReddit = category.startsWith("r/");
  const endPoint = isReddit ? categoryEndPointReddit : categoryEndPoint;

  return fetch(endPoint(category))
    .then(response => response.json())
    .then(stories => {
      stories = isReddit ? getRedditIds(stories) : stories;

      return stories;
    });
}

export const getComment = id => {
  return new Promise((resolve, reject) => {
    getItem(id)
      .then(item => {
        if (item.kids && item.kids.length > 0) {
          let results = Promise.all(item.kids.map(getComment));
          results.then(kids => {
            resolve({ ...item, kids: kids });
          });
          results.catch(() => resolve(item));
        } else {
          resolve(item);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
};

export function getRedditComments(postId) {
  return fetch(itemEndPointReddit(postId))
    .then(response => response.json())
    .then(data => {
      return convertRedditCommentToHNFormat(data[1]);
    });
}
