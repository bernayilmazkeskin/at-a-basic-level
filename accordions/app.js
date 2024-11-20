const accBtn=document.getElementsByClassName("accordionBtn");



for (let i = 0; i < accBtn.length; i++) {
  accBtn[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
       panel.style.display = "none";
       panel.style.height="0";
      
    } else {
      
      panel.style.display = "block";
       panel.style.height="15vh";
    }
  });

  }
 