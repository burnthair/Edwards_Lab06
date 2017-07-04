function tempConvert (temp, unit) {

  if (isNaN(temp)) {
    console.log('Please enter a valid number.');
  }

  if (unit.toLowerCase() === 'f' ) {
    var fahren = (temp*(9/5)+32);
   fahren = fahren.toFixed(2);
   console.log(temp + "° Celcius is equal to " + fahren + "° Fahrenheit.");
  } else if (unit.toLowerCase() === 'c') {
    var celcius = (temp-32)*(5/9);
    celcius = celcius.toFixed(2);
    console.log(temp + "° Fahrenheit is equal to " + celcius + "° Celcius.");
  } else {
    console.log('Please enter \'c\' or \'f\'.')
  }
}

var temperature = prompt('Enter the number of degrees.');
var farhenOrCels = prompt('Would you like that converted to \'c\'elcius or \'f\'ahrenheit?');
tempConvert(temperature, farhenOrCels);
