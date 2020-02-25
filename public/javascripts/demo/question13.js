document.title = 'Question 13 Roman to Integer Demo Page';
var Roman_to_Number = function(num) {
  var result = '';
  var RomanToNumber = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  for (var key in RomanToNumber) {
    if (num >= RomanToNumber[key]) {
      result += key.repeat(Math.trunc(num / RomanToNumber[key]));
      num -= RomanToNumber[key] * Math.trunc(num / RomanToNumber[key]);
    }
  }
  return result;
};

// console.log(Reverse_Integer(123));
window.onload = function() {
  submit.addEventListener('click', function() {
    var input = document.getElementById('input');
    var submit = document.getElementById('submit');
    var demo1 = document.getElementById('demo1');
    var demo2 = document.getElementById('demo2');
    var iv = input.value;
    if (iv === '') return alert('this is not valid');
    //* Important Notice when input from HTML is string
    if (iv === '0')
      return alert('reverse 0 is 0, please input other number to verify');
    if (parseInt(iv) >= 3999)
      return alert(
        'the number is out of positive range, and result will be define as out of range！'
      );
    if (parseInt(iv) <= 0)
      return alert(
        'the number is out of negative range, and result will be define as out of range！'
      );
    // console.log(iv);&& "
    // console.log(typeof iv);
    // console.log(Reverse_Integer(iv));
    submit.onclick = function() {
      var oiv = iv;
      var ov = Roman_to_Number(parseInt(iv));
      // console.log(typeof oiv);
      // console.log(typeof ov);
      demo1.innerHTML = oiv;
      demo2.innerHTML = ov;
    };
  });
};
