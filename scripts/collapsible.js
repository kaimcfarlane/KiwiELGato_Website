//Instance variables
var coll = document.getElementsByClassName("wrapperExpButton");
var i;

//Reveals Information Upon Button Click
for (i = 0; i < 3; i++) {
    if(i == 0) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            this.style.display = "none";
            var content = document.querySelector(".aboutintro");
            if (content.style.display === "block") {
            // content.style.display = "none";
            content.classList.add("active");
            } else {
            content.style.display = "block";
            }
        });
    }
    else if (i == 1) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            this.style.display = "none";
            var content = document.querySelector(".aboutmiddle");
            if (content.style.display === "block") {
            // content.style.display = "none";
            content.classList.add("active");
            } else {
            content.style.display = "block";
            }
        });
    }
    else if (i == 2) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            this.style.display = "none";
            var content = document.querySelector(".aboutend");
            if (content.style.display === "block") {
            // content.style.display = "none";
            content.classList.add("active");
            } else {
            content.style.display = "block";
            }
        });
    }
}