function close() {
  var childrenDiv = this.childNodes;
  if (childrenDiv[5].classList.contains("visible")){

  }else{
    var visibleQuestion = document.querySelector(".visible");
    visibleQuestion.classList.toggle("visible");

    var activeQuestion = document.querySelector(".active");
    activeQuestion.classList.toggle("active");

    var activeArrow = document.querySelector(".rotate");
    activeArrow.classList.toggle("rotate");
  }
  }

function show() {
  var childrenDiv = this.childNodes;
  childrenDiv[5].classList.toggle("visible");
// for (i =0; i < childrenDiv.length; i++)
// console.log(childrenDiv[i]);
  childrenDiv[3].classList.toggle("rotate");
  childrenDiv[1].classList.toggle("active");
}

// function decider(){
//   if (this.classList.contains(""))
// }

var buttonList = document.querySelectorAll(".question");

for (i = 0; i < buttonList.length; i++) {
  buttonList[i].addEventListener("click", close);
  buttonList[i].addEventListener("click", show);
}
