function createSmoothie() {
	var smoothie = new Smoothie(
		document.getElementById("name").value,
		document.getElementById("email").value,
		document.getElementById("flavor").value,
		document.getElementById("size").value,
		document.querySelectorAll('input[type=checkbox]:checked').length > 0 ? true : false
	);

	document.getElementById("smoothie-form").reset();

	var smoothieDescription = document.createElement("p");
	smoothieDescription.innerHTML = "Name: " + smoothie.name + "<br>" +
									"Email: " + smoothie.email + "<br>" +
									"Flavor: " + smoothie.flavor + "<br>" +
									"Size: " + smoothie.size + "<br>" +
									"Toppings: " + (smoothie.toppings ? "Yes" : "No");
									

	document.body.appendChild(smoothieDescription);
}

class Smoothie {
	constructor(name, email, flavor, size, toppings) {
		this.name = name;
		this.email = email;
		this.flavor = flavor;
		this.size = size;
		this.toppings = toppings;
	}
}
