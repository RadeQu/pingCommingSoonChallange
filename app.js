const input = document.querySelector("input");
const errMess = document.querySelector(".errMess");
document.querySelector(".btn").addEventListener("click", () => {
	let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (input.value.match(regexEmail)) {
		input.classList.remove("active");
		errMess.classList.add("succesActive");
		errMess.textContent = "You successfully signed to our subscription!";
	} else if (input.value.length == 0){
		input.classList.add("active");
		errMess.classList.remove("succesActive");
		errMess.textContent = "Whoops! It looks like you forgot to add your email";
	}else {
		input.classList.add("active");
		input.placeholder = "example@email/com";
		errMess.classList.remove("succesActive");
		errMess.textContent = "Please provide a volid email address";
	}
});
