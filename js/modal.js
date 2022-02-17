const btn = document.querySelectorAll("button.modal-button");
const modals = document.querySelectorAll('.modal');
const spans = document.getElementsByClassName("close");

for (i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
   const modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
 }
}


for (i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}