const slider = document.querySelector("#slider");
const fill = document.querySelector(".bar .fill");
const discount = document.querySelector(".discount-text");
const discountBtn = document.querySelector("input[name=checkbox]");
let amountText = document.querySelector("#info-price p");
let views = document.querySelector("#info-views");
let amount = 8;
amountText.innerHTML = `$${amount}.00`;

const setBar = () => {
	fill.style.width = slider.value * 2 - 10 + "%";
	switch (slider.value) {
		case "10":
			amount = 8;
			break;
		case "20":
			amount = 12;
			break;
		case "30":
			amount = 16;
			break;
		case "40":
			amount = 24;
			break;
		case "50":
			amount = 32;
			break;

		default:
			console.log("error");
			break;
	}
	if (discountBtn.checked) {
		amountText.innerHTML = `$${amount * (3 / 4)}.00`;
	} else {
		amountText.innerHTML = `$${amount}.00`;
	}
};

slider.addEventListener("input", setBar);

discountBtn.addEventListener("input", () => {
	if (discountBtn.checked) {
		amountText.innerHTML = `$${amount * (3 / 4)}.00`;
	} else {
		amountText.innerHTML = `$${amount}.00`;
	}
});
