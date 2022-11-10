function myPrompt()
{
    var person = prompt("Please enter your user name");
    if (person != "")
    {
        document.getElementById("test").innerHTML = "Hello " + person + "! How are you today?";
    }
}