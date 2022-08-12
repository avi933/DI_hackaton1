document.getElementById("login").addEventListener("click", validate);
 var attempt = 3;
function validate(){ 
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
         if (( username == "aviramjeeawon@gmail.com" && password == "avi") || (username == "vidhipriya@gmail.com" && password == "vidhi")){
             alert ("Login successfully");
             window.location="html/main.html"
//window.location = "success.html"; // Redirecting to other page.
         return false;}
         else{
               attempt --;
             alert("You have "+attempt+" attempt left;");
         if( attempt == 0){
             document.getElementById("username").disabled = true;
             document.getElementById("password").disabled = true;
             document.getElementById("submit").disabled = true;
          return false;}}}
