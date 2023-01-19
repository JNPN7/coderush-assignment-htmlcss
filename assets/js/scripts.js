const bookForms = document.querySelectorAll(".bookBtn");
const closeForm = document.querySelector("#btnCloseForm");
const formPopup = document.querySelector(".form-popup-bg");


bookForms.forEach((bookForm) => {
	bookForm.addEventListener("click", (e) => {
		e.preventDefault();
		formPopup.classList.add("is-visible");
	});
})
closeForm.addEventListener("click", (e) => {
	e.preventDefault();
	formPopup.classList.remove("is-visible");
})

