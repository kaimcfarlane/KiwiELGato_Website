let loadWheel = document.querySelector(".loadWheel")
let contentPage = document.querySelector(".contentPage")
let span = document.querySelector("span")

window.onload=()=>
{
    setInterval(wheelAnimation, 3700)

}

function wheelAnimation() {
    contentPage.style.opacity = "1"; 
    loadWheel.style.display = "none";
    // span.style.animation = "1s ease-out 0s 1 contentLoad"; 
}