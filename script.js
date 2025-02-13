//your JS code here. If required.
let inputs = document.querySelectorAll(".code")
for(let i=0; i<inputs.length; i++){
	inputs[i].addEventListener("input", () => {
		inputs[i+1].focus()
	})
	inputs[i].addEventListener("keydown", (e) => {
		if(e.key === "Backspace"){
			inputs[i].value = ""
		}
	})
	inputs[i].addEventListener("keyup", (e) => {
		if(e.key === "Backspace"){
			inputs[i-1].focus()
			inputs[i].blur()
		}
	})
}