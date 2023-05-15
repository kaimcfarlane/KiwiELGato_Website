//Instance Vvariables
var el = document.getElementById("el");
var bannerText = document.getElementById("bannerText");

//Landing Page Formatting for Mobile View
if (screen.width > 450)
{
        el.remove();
        bannerText.innerText = "KIWI-EL-GATO";
}