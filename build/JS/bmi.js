"use strict";
//the void type does not return any value
function calculate() {
    //stores the calculated BMI as a string
    var bmi;
    //holds the reference to an HTML element with the id result
    var result = document.getElementById("result");
    //the height value is extracted from the input element and the value is converted into an integer
    var height = parseInt(document.getElementById("height").value);
    //the weight value is extracted from the input element and the value is converted into an integer
    var weight = parseInt(document.getElementById("weight").value);
    //displays weight and height values
    document.getElementById("weight-val").textContent = weight + "kg";
    document.getElementById("height-val").textContent = height + "cm";
    //calculate the BMI using the height and weight values and toFixed ensures the BMI is rounded to one decimal place 
    bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
    result.textContent = bmi;
    let category;
    //determines the BMI category based on the calculated BMI value
    if (parseFloat(bmi) < 18.5) {
        category = "Underweight 😔";
        result.style.color = "#ffc44d";
        //checks if it is between 18.5 and 24.9
    }
    else if (parseFloat(bmi) >= 18.5 && parseFloat(bmi) <= 24.9) {
        category = "Normal weight 🤩";
        result.style.color = "#0be881";
        //checks if it is between 25 and 29.9
    }
    else if (parseFloat(bmi) >= 25 && parseFloat(bmi) <= 29.9) {
        category = "Overweight 😮";
        result.style.color = "#ff884d";
    }
    else {
        category = "Obese 😱";
        result.style.color = "#ff5e57";
    }
    //display BMI category
    document.getElementById("category").textContent = category;
}
