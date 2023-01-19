const topbar_template = document.createElement('template');

topbar_template.innerHTML = `
<nav>
	<div class="row content-space-between header">
		<div class="col content-center chevron" id="menu-toggler">
			<i class="fa-solid fa-chevron-down"></i>
		</div>
		<h2 class="title">Airline Site</h2>
		<div></div>
	</div>
	<div class="col content-center text-center menu hidden">
		<div><a href="./home.html">Home</a></div>
		<div><a href="./about.html">About Us</a></div>
		<div><a href="./contact.html">Contact</a></div>
	</div>
</nav>
`

document.body.appendChild(topbar_template.content);
const menuToggler = document.querySelector("#menu-toggler");
const menu = document.querySelector(".menu");

menuToggler.addEventListener("click", (e) => {
	e.preventDefault();
	if (menu.classList.contains("hidden")) {
		console.log("yes");
		menu.classList.remove("hidden");
	} else {
		menu.classList.add("hidden");
	}
});
