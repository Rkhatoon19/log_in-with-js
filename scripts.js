function check(){
var user_name=document.getElementById("exampleInputEmail1").value;
var password=document.getElementById("exampleInputPassword1").value;
if( user_name == "admin" && password == 123)
{
    window.alert("Login Successful");
}
else{
    window.alert("Login Un-Successful");
}
}