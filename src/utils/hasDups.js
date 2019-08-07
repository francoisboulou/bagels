export default function hasDups(num) {
  const n = (num + "").split("").map(Number);
  return n[0] === n[1] || n[0] === n[2] || n[1] === n[2];
}
