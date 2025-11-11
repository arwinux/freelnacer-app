export default function toNumbersWithComma(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
