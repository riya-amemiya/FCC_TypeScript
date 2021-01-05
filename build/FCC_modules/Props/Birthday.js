export default function birthday(_ref) {
  var yer = _ref.yer,
      mon = _ref.mon,
      day = _ref.day;
  var birthday = new Date(yer, mon - 1, day);
  var now = new Date();
  var yb = new Date(now.getFullYear(), birthday.getMonth(), birthday.getDate());
  var y = now.getFullYear() - birthday.getFullYear();
  var show = now < yb ? y - 1 : y;
  return show;
}