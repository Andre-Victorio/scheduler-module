export function capitalizeWords(str) {
  console.log(str);
  if (str !== null) {
    str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  return str;
}
