const calculator = document.querySelector('#calculator')
const inputs = document.getElementsByTagName("input");
const msg = document.querySelector('#msg')

calculator.addEventListener('submit', (e) => {
	e.preventDefault()

	const w = inputs[0].value
	const h = inputs[1].value

	const result = (w / (h * h));
	const bmi = result.toFixed(2);

	let scale;
	if(bmi < 18.5){
		scale = 'underweight'
	} else if (bmi >= 18.5 && bmi < 25){
		scale = 'normal'
	} else if(bmi >= 25 && bmi < 30){
		scale = 'overweight'
	} else if(bmi > 30) {
		scale = 'obese'
	} else {
		scale = 'error'
	}

	msg.innerHTML = `BMI: ${bmi}
	<br>
	Your weight class is ${scale}
	`;
})