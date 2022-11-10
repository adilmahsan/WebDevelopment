function displayInput()
{
    var testInput = document.getElementById("name").value;

    if (testInput.length == 0)
    {
        document.getElementById("para").innerHTML = "You didn't type anything. :(";
    }
    else
    {
        document.getElementById("para").innerHTML = testInput;
    }
}