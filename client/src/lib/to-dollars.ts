/** Converts cents to a string of dollars. */
export default function toDollars(value: number): string {
  return '$' + (value / 100).toFixed(2);
}
