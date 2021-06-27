const slider = document.querySelector("#slider");
const fill = document.querySelector(".bar .fill");
const discount = document.querySelector(".discount-text");
const discountBtn = document.querySelector("input[name=checkbox]");
const submitBtn = document.querySelector("#submit-btn");
let amountText = document.querySelector("#info-price p");
let views = document.querySelector("#info-views");
let amount = 8;

const setBar = () => {
	fill.style.width = slider.value * 2 - 10 + "%";
	switch (slider.value) {
		case "10":
			amount = 8;
			views.innerHTML = "10K PAGEVIEWS";
			break;
		case "20":
			amount = 12;
			views.innerHTML = "50K PAGEVIEWS";
			break;
		case "30":
			amount = 16;
			views.innerHTML = "100K PAGEVIEWS";
			break;
		case "40":
			amount = 24;
			views.innerHTML = "500K PAGEVIEWS";
			break;
		case "50":
			amount = 32;
			views.innerHTML = "1M PAGEVIEWS";
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

const setDiscount = () => {
	if (discountBtn.checked) {
		amountText.innerHTML = `$${amount * (3 / 4)}.00`;
	} else {
		amountText.innerHTML = `$${amount}.00`;
	}
};

const sendRequestTemplate = () => {
	if (discountBtn.checked) {
		const finalAmount = amount * (3 / 4);
		alert(`Your trial will cost: $${finalAmount}, for ${views.innerHTML}`);
	} else {
		alert(`Your trial will cost: $${amount}, for ${views.innerHTML}`);
	}
};

slider.addEventListener("input", setBar);

discountBtn.addEventListener("input", setDiscount);

submitBtn.addEventListener("click", sendRequestTemplate);
