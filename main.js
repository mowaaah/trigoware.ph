const myFunction = function() {
    let num1 = document.getElementById("input1").value;
    let result = Number(num1) * (9/5) + (32);
    let result_final = parseFloat(result).toFixed(2);
    return result_final;
};

const ClearFields = function() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
};
