export default function Pow({
  num,
  n
}) {
  //xのy乗
  let nums = num;

  for (let i = 2; i <= n; i++) {
    nums *= num;
  }

  return nums;
}