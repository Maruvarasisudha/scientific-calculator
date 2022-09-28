let screen = document.getElementById("calculator");


function myfunction(num) {
  screen.value += num;
}





function calculate() {

  try {
    screen.value = eval(screen.value);
  } catch (error) {
    alert("invalid");
  }
}
 function clearall() {
  screen.value = "";
}
function delet() {
  screen.value = screen.value.slice(0, -1);
}

function mysin(){
    screen.value=Math.sin(screen.value);
}
function mycos(){
    screen.value=Math.cos(screen.value);
}
function mylog(){
    screen.value=Math.log(screen.value);
}
function mylogs(){
    screen.value=Math.log2(screen.value);
}
function myrootof(){
    screen.value=Math.sqrt(screen.value);
}
function mytan(){
    screen.value=Math.tan(screen.value);
}
function mysqroot(){
    screen.value=Math.pow(screen.value,2);
}
function mysqroots(){
    screen.value=Math.pow(screen.value,3);
}