const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#calculoboton");
const pResult = document.querySelector(".result");

function btnOnClick() {
	const resultadoSumaInputs =
		parseFloat(input1.value) + parseFloat(input2.value);
	pResult.innerText = "Resultado: " + resultadoSumaInputs;
}
