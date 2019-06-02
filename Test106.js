function WordCount(str) {
    var num1 = str;
    var num2 = num1.length;
    return num2;
}
function FirstReverse(str) {
    var num1 = str;
    var num2 = num1.split('');
    var num3 = num2.reverse();
    var num4 = num3.join('');
    return num4;
}
function EvenrOdd(str) {
    var num1 = str.length;
    var num2 = Number(num1);
    vsmaar num3 = num2 % 2;
    if (num3 == 0) {
        num8 = 'even';
    } else {
        num8 = 'odd';
    }
    return num8;
}
function input1() {
    var num0 = document.getElementById('one').value;
    var ex = document.getElementById('test1');
    ex.textContent = WordCount(num0);
}
function input2() {
    var num0 = document.getElementById('two').value;
    var ex = document.getElementById('test2');
    ex.textContent = FirstReverse(num0);
}

function input3() {
    var num0 = document.getElementById('three').value;
    var ex = document.getElementById('test3');
    ex.textContent = EvenrOdd(num0);
}

