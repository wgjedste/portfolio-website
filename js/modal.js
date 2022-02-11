// const open = document.getElementById('open');
// const modal_container = document.getElementById('modal_container');
// const close = document.getElementById('close');

// open.addEventListener('click', () => {
//   modal_container.classList.add('popout');
// })

// close.addEventListener('click', () => {
//   modal_container.classList.remove('popout');
// })

// const openModalButtons = document.querySelectorAll('[data-modal-target]')
// const closeModalButtons = document.querySelectorAll('[data-close-button]')
// const overlay = document.getElementById('overlay')

// openModalButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = document.querySelector(button.dataset.modalTarget)
//     openModal(modal)
//   })
// })

// overlay.addEventListener('click', () => {
//   const modals = document.querySelectorAll('.modal.active')
//   modals.forEach(modal => {
//     closeModal(modal)
//   })
// })

// closeModalButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = button.closest('.modal')
//     closeModal(modal)
//   })
// })

// function openModal(modal) {
//   if (modal == null) return
//   modal.classList.add('active')
//   overlay.classList.add('active')
// }

// function closeModal(modal) {
//   if (modal == null) return
//   modal.classList.remove('active')
//   overlay.classList.remove('active')
// }
const btn = document.querySelectorAll("button.modal-button");

// All page modals
const modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
const spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
   const modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
 }
}

// When the user clicks on <span> (x), close the modal
for (i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}