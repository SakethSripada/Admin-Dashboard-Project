function openPopup() {
    document.getElementById("popup-container").style.display = "flex";
    document.body.style.overflow = 'hidden';
  }
  
  function closePopup() {
    document.getElementById("popup-container").style.display = "none";
    document.body.style.overflow = 'auto';
  }

  function closeRightAside(){
    document.getElementById("rightAside").style.display = "none";
  }

  function openRightAside(){
    document.getElementById("rightAside").style.display = "block";
  }


 function darkMode(){
    document.body.style.backgroundColor = "black";
    document.getElementById("dashLabelHome").style.color = "white";
    let cardColorDark = document.querySelectorAll("main .insights > div");
    cardColorDark.forEach(function(cardColor) {
    cardColor.style.background = "grey";
    });
}

function lightMode(){
    document.body.style.backgroundColor = "#bfc3e2";
    document.getElementById("dashLabelHome").style.color = "black";
    let cardColorDark = document.querySelectorAll("main .insights > div");
    cardColorDark.forEach(function(cardColor) {
      cardColor.style.background = "white";
    });
}


