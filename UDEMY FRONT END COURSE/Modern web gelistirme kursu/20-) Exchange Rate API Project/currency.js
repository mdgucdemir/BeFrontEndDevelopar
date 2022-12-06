// Currency js

class Currency {

    constructor(firstCurrency, secondCurrency) {
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = "https://open.er-api.com/v6/latest/"

        this.amount = null;
    }

    exchange() {

        return new Promise((resolve, reject) => {

            fetch(this.url + this.firstCurrency)
                .then(response => response.json())
                .then(data => {
                    const parity = data.rates[this.secondCurrency];
                    const amount2 = Number(this.amount); // string olarak geliyor number a cevirdik

                    let total = parity * amount2;
                    // console.log(total);
                    resolve(total);
                })
                .catch(err => reject(err));

        });

    }

    changeAmount(amount) {
        this.amount = amount;
    }
    changeFirstCurrency(newFirstCurrency) {
        this.firstCurrency = newFirstCurrency;
    }
    changeSecondCurreny(newSecondCurrency) {
        this.secondCurrency = newSecondCurrency;
    }

}