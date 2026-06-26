export function truncate(str, n) {
  if (!str) return "";
  return str.length > n ? str.substring(0, n) + "..." : str;
}