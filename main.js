function ClearFields() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
}

// Celcius to F and K
const CFarenheitConv = function() {
    let num1 = document.getElementById("input1").value;
    let result = Number(num1) * (9/5) + (32);
    let result_final = parseFloat(result).toFixed(2) + " °F";
    return result_final;
};

const CKelvinConv = function () {
	let num1 = document.getElementById("input1").value;
	let result = Number(num1) + 273.15;
	let result_final = parseFloat(result).toFixed(2) + " K";
	return result_final;
};

// Farenheit to C and K 
const FKelvinConv = function () {
	let num1 = document.getElementById("input1").value;
	let result = (Number(num1) - 32) * (5/9) + 273.15;
	let result_final = parseFloat(result).toFixed(2) + " K";
	return result_final;
};

const FCelciusConv = function () {
	let num1 = document.getElementById("input1").value;
	let result = (Number(num1) - 32) * (5/9);
	let result_final = parseFloat(result).toFixed(2) + " °C";
	return result_final;
};

// Kelvin to C and K
const KCelciusConv = function () {
	let num1 = document.getElementById("input1").value;
	let result = (Number(num1) - 273.15);
	let result_final = parseFloat(result).toFixed(2) + " °C";
	return result_final;
};

const KFahrenheitConv = function () {
	let num1 = document.getElementById("input1").value;
	let result = (Number(num1) - 273.15) * (9/5) + 32;
	let result_final = parseFloat(result).toFixed(2) + " °F";
	return result_final;dc
};

const TempFunction = function () {
	let select = document.getElementById("selection");
	let value = select.options[select.selectedIndex].value;

    if (value == "F") {
        document.getElementById("input2").value = (FCelciusConv());
        document.getElementById("input3").value = (FKelvinConv());
    }
    else if (value == "C") {
        document.getElementById("input2").value = (CFarenheitConv());
		document.getElementById("input3").value = (CKelvinConv());
    }
    else if (value == "K") {
        document.getElementById("input2").value = (KCelciusConv());
		document.getElementById("input3").value = (KFahrenheitConv());
    }
	else if (value == "blank"){
		document.getElementById("input2").value = ("");
		document.getElementById("input3").value = ("");
	}
};

//OnKeyUp Event in Input 1
const TempOnKeyUp = function () {
	let num1 = document.getElementById("input1").value;

	if (num1 != "") {
		document.getElementById("input2 , input3").value = TempFunction();
	} else {
		document.getElementById("input2").value = (" ");
		document.getElementById("input3").value = (" ");
	}
};

//OnClick Event in Select Element
const TempOnClick = function(){
	let any = document.getElementById("selection");

	if (any != "" ){
		document.getElementById("input2 , input3").value = (TempOnKeyUp());
	} else {
		document.getElementById("input2 , input3").value = ("");
	}
};


