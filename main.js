var elSwitchButton = document.querySelector(".site-header__mode-link");

console.log(elSwitchButton);



elSwitchButton.addEventListener("click", function() {

  console.log("qwe"); 

  document.body.classList.toggle("theme-dark")
  

});

// elSwitchButton.addEventListener("change", function(){

// });