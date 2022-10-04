export default function reverseString(string) {
  if (string === '') return string;
  return reverseString(string.slice(1)) + string.charAt(0);
}
