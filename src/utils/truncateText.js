export default function truncateText(str, length) {
  return str.length < length ? str : str.slice(0, length) + '...';
}
