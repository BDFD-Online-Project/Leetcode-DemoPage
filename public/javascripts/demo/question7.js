document.title = 'Question 7 Reverse Integer Demo Page';
var Reverse_Integer = function(num) {
  var result= "";
  if(num < 0){
    result=num.toString().split('').reverse();
    // console.log(y);
    result.unshift('-');
    result.pop();
    result = parseInt(result.join(''));
    //Check for 32 bit outside of bounds
    if(result < -2147483648 ) {
        return 0
    }
    //positive case start here
  } else {
    result = num.toString().split('').reverse().join('');
    result = parseInt(result)
    //Check for 32 bit outside of bounds
    if (result > 2147483648) {
        return 0
    } 
  }
  return result
}     

// console.log(Reverse_Integer(123));
window.onload = function() {
  submit.addEventListener("click", function(){
      var input = document.getElementById("input");
      var submit = document.getElementById("submit");
      var demo1 = document.getElementById("demo1");
      var demo2 = document.getElementById("demo2");
      var iv = input.value;
    if(iv === "") return   alert('this is not valid');
    //* Important Notice when input from HTML is string 
    if(iv === "0") return   alert('reverse 0 is 0, please input other number to verify'); 
    if(parseInt(iv) >= 2147483648 ) return   alert('the number is out of positive range, the answer is return 0 anyway！'); 
    if(parseInt(iv) <= -2147483648 ) return   alert('the number is out of negative range, the answer is return 0 anyway！'); 
    // console.log(iv);&& "
    // console.log(typeof iv); 
    // console.log(Reverse_Integer(iv));
    submit.onclick = function (){
      var oiv = parseInt(iv);
      var ov= Reverse_Integer(parseInt(iv));
      // console.log(typeof oiv);
      // console.log(typeof ov);
      demo1.innerHTML = oiv;
      demo2.innerHTML = ov;
    }
  })
}