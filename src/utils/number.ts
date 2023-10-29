export function formatNumber(number: number): string {
  const formatter = new Intl.NumberFormat("en-US");
  return formatter.format(number);
}
export function getNumberFromString(str: string) {
  const regex = /\d+/g;
  const matches = str.match(regex);
  if (!matches) return "";
  return matches.join("");
}
