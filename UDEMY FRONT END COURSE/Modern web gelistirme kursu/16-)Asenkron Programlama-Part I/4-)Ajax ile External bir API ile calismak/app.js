
document.getElementById("change").addEventListener("click",change);

function change(){

    const xhr = new XMLHttpRequest();

    // (true) yazmasak ta default olarak asenkron algilar, 
    xhr.open("GET","https://open.er-api.com/v6/latest/USD",true);

    xhr.onload = function(){
        if (this.status){  

            const response = JSON.parse(this.responseText);          
            // console.log(this.responseText);
            // console.log(response.rates.TRY);

            const rate = response.rates.TRY;
            // console.log(typeof response.rates.TRY); // number bir ifade

            // console.log(typeof document.getElementById("amount").value);  // string string bir ifade

            const amount = Number(document.getElementById("amount").value); // String olan ifadeyi Number a cevirdik

            // console.log(amount * rate);
            document.getElementById("tl").value = amount * rate;
        }
    }

    xhr.send();
}