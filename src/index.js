module.exports = function check(str, bracketsConfig) {
    // your solution
    let arrBrackets = [];
    bracketsConfig.forEach(function (element) {
        arrBrackets.push(element.reduce(function (sum, current) {
            return sum + current;
        }));
    });

    let result;
    let flag = 0, count = 0;
    let arrLng = arrBrackets.length;
    for (; flag <= 0;) {
        for (let i = 0; i < arrLng; i++) {
            if (str.indexOf(arrBrackets[i]) == -1) {
                count++;
            } else count--;
            str = str.replace(arrBrackets[i], '');
            if (count > (arrLng * 3)) {
                flag = 1;
                break;
            }
        }
    }

    // if (str.length > 0 ) return false;
    // else return true;
    return result = (str.length <= 0) ? true : false;


}
