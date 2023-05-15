// Change collapsible one to href class or div above href class
var coll = document.getElementsByClassName("wrapperExpButton");
var i;

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

//So either when clicked we put a css active style where we put an animation to change opacity

//Heres the issue. The above code can yes acess all buttons with the words wrapperExpButton
//But because of the loop we can only access elements we put so only about intro will go in and out
//not the about middle
//either we add some ifs or we try two different statements.

// coll[1].addEventListener("click", function() {
//         this.classList.toggle("active");
//         var content = document.querySelector(".aboutintro");
//         if (content.style.display === "block") {
//           content.style.display = "none";
//         } else {
//           content.style.display = "block";
//         }
//       });

// var coll2 = document.getElementsByClassName("wrapperExpButton2");
// var x;

// for (x = 0; x < 1; x++) {
//     coll2[x].addEventListener("click", function() {
//       this.classList.toggle("active");
//       var content1 = document.querySelector(".aboutmiddle");
//       if (content1.style.display === "block") {
//         content1.style.display = "none";
//       } else {
//         content1.style.display = "block";
//       }
//     });
//   }

// coll2[0].addEventListener("click", function() {
//           this.classList.toggle("active");
//           var content1 = document.querySelector(".aboutmiddle");
//           if (content1.style.display === "block") {
//             content1.style.display = "none";
//           } else {
//             content1.style.display = "block";
//           }
//         });