function myAlertMath()
{
    var userNumber = document.getElementById("mathInput").value;
    alert("Your number x 5 is " + userNumber * 5);
    document.getElementById("test").innerHTML =  "Your number x 5 is " + userNumber * 5; 

}

function checkField1()
{
    var field = document.getElementById("field1").value;
    
    if (field.length < 5)
    {
        document.getElementById("message1").innerHTML = "Too short!";
    }
    else
    {
        document.getElementById("message1").innerHTML = "That's long enought!";
    }
}