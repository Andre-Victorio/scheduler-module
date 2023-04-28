export function capitalizeWords(str) {
  var parsedStr;
  if (str !== null) {
    parsedStr = str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  return parsedStr;
}
