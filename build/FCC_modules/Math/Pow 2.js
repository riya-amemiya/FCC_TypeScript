export default function Pow() {
  var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  //xのy乗
  return Math.pow(num, n);
}