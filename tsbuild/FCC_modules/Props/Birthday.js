export default function birthday(_a) {
    var yer = _a.yer, mon = _a.mon, day = _a.day;
    var birthday = new Date(yer, mon - 1, day);
    var now = new Date();
    var yb = new Date(now.getFullYear(), birthday.getMonth(), birthday.getDate());
    var y = now.getFullYear() - birthday.getFullYear();
    var show = (now < yb) ? y - 1 : y;
    return show;
}
//# sourceMappingURL=birthday.js.map