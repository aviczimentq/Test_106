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
    var num1 = str;
    var num2 = num1.length;
    var num3 = 'even';
    var num4 = 'odd';
    if (num2 == 2) {
        num5 = num3;
    } else if (num2 == 4) {
        num5 = num3;
    } else if (num2 == 6) {
        num5 = num3;
    } else if (num2 == 8) {
        num5 = num3;
    } else if (num2 == 10) {
        num5 = num3;
    } else {
        num5 = num4;
    }
    return num5;
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

