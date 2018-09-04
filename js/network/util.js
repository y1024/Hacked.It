const scapegoat = require("scapegoat");
const unescape = scapegoat.unescape;

export function getRedditIds(data) {
  let ids = [];

  data.data.children.map(item => {
    ids.push(item.data.id);
  });

  return ids;
}

export function convertRedditItemToHNFormat(data) {
  const result = {
    by: data[0].data.children[0].data.author,
    descendants: data[0].data.children[0].data.num_comments,
    id: data[0].data.children[0].data.id,
    kids: data[1].data.children.map(item => item.data.id),
    score: data[0].data.children[0].data.score,
    time: data[0].data.children[0].data.created,
    title: data[0].data.children[0].data.title,
    type: "story",
    url: data[0].data.children[0].data.url,
    text: data[0].data.children[0].data.selftext_html
      ? unescape(data[0].data.children[0].data.selftext_html)
      : null
  };

  return result;
}

export function convertRedditCommentToHNFormat(data) {
  data.data.children = data.data.children.filter(child => child.kind != "more");

  return data.data.children.map(item => {
    if (item.data.replies) {
      item.data.replies.data.children = item.data.replies.data.children.filter(
        child => child.kind != "more"
      );
      if (item.data.replies.data.children.length == 0) item.data.replies = "";
    }

    return {
      by: item.data.author,
      id: item.data.id,
      // "parent": 17892796,
      text: unescape(item.data.body_html)
        .replace(`<div class="md">`, "")
        .replace(`</div>`, "")
        .replace(`<p>`, "")
        .replace(`</p>`, ""),
      time: item.data.created_utc,
      kids: item.data.replies
        ? convertRedditCommentToHNFormat(item.data.replies)
        : null,
      type: "comment"
    };
  });
}
