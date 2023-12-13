export default function truncate(stringToTruncate) {
  if (stringToTruncate?.length > 10) {
    return stringToTruncate?.substring(0, 30) + "...";
  } else {
    return stringToTruncate;
  }
}
