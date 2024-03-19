const closeIcon = document.getElementById("close");
const openButton = document.getElementById("open");
const modal = document.getElementById("modal");
const modalContainer = document.querySelector(".modal-container")


// open.addEventListener('Click', () => modal.classList.add("show-modal")); 

openButton.addEventListener("click", () => {
    modalContainer.classList.add("show-modal")
    modal.classList.remove("close-modal")
})

closeIcon.addEventListener("click", () => {
    modal.classList.add("close-modal")
    modalContainer.classList.remove("show-modal")
})

close.addEventListener('Click', () => modal.classList.remove("show-modal")); 