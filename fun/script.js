document.addEventListener("DOMContentLoaded", function(event) {

	function SayIt(event) {
	var name=document.getElementById("text1").value;
	if (name == "Андрей Овсиенко") {
		var message = name + ", ваша своместимость с Боженой = 100%. Поздравляем !"
	} else if (name == "Илья Волков") {
		var message = name + ", вы Пиздовыблюдоночнозалупнокрысоголовыйочковородныйублюдок !"
	} else if (name == "Настя Голубова") {
		var message = name + ", пошла ты нахуй !"
	} else if (name == "Вероника Игнашкина") {
		var message = name + " ... какой долбаеб попросил это написать ?"
	} else { var message = name + ", вы чудесный человек"}
	document.getElementById("ya daun").innerHTML=message;
} 

document.querySelector("button").addEventListener("click", SayIt);

document.querySelector("#num1").addEventListener("click", function(event) { if (event.shiftKey === true ) { alert("Нахуя ты шифт нажал, еблан ?") } });

});



// document.getElementsByTagName(name)