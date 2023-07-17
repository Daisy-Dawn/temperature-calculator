document.getElementById("mySubmit").onclick = function(){
    let temperature;
    
    if(document.getElementById("cTemp").checked){
        temperature = document.getElementById("temperature").value;
        temperature = Number(temperature);
        temperature = toCelsius(temperature);
        document.getElementById("answer").innerHTML = temperature + "°C";
    }
    else if (document.getElementById("fTemp").checked){
        temperature = document.getElementById("temperature").value;
        temperature = Number(temperature);
        temperature = toFahrenheit(temperature);
        document.getElementById("answer").innerHTML = temperature + "F";
    }
    else if (document.getElementById("kTemp").checked) {
        temperature = document.getElementById("temperature").value;
        temperature = Number(temperature);
        temperature = toKelvin(temperature);
        document.getElementById("answer").innerHTML = temperature + "K";
    }
    else{
        document.getElementById("answer").innerHTML = "You did not put in any input!";
    }
}

function toCelsius(temperature){
    return Math.round((temperature - 32) * (5/9));
}

function toFahrenheit(temperature){
    return Math.round((temperature - 32) * (5/9));
}

function toKelvin(temperature){
    return Math.round((temperature - 32) * (5/9) + 273.15);
}

