$(document).ready(function(){
    $("form").submit(function(){
        alert("Your message has been submitted. We will reply as soon as possible");
    });
});
function myFunc(){
    alert("You Clicked me");
 }
 function hello() {
    alert('Hello');
    }
    document.getElementById("viewBtn").addEventListener("click", hello);