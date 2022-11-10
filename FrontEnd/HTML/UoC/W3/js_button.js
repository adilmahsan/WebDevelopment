var counter = 0;

function addParagraphText()
{
    document.getElementById("para").innerHTML = "Thanks for adding text for the " + counter + "th time.";
    counter++;
}