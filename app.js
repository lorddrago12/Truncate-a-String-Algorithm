let result;

function truncateString(text, limit) {
  if (text.length > limit) {
    result = text.slice(0, limit);
    return result + "...";
  } else {
    return text;
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
