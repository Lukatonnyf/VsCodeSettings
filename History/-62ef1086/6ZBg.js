// cotação moeda do dia (ipotético)
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

const form = document.querySelector("form")
const amount  =  document.getElementById("amount")
const currency  = document.getElementById("currency")

amount.addEventListener("input", () => {    
    const hasCharactersRegex = /\D+/g;
    amount.value = amount.value.replace(hasCharactersRegex, "");

})

form.onsubmit = (e) => {
    e.preventDefault()

    // Identifica qual a moeda selecionada
    switch(currency.value){
        case "USD":
          convertCurrency(amount.value, USD, "US$")
          break

        case "EUR":
          convertCurrency(amount.value, EUR, "€")
          break
            
        case "USD":
           convertCurrency(amount.value, USD, "US$")
           break
        


    }
}


function convertCurrency(amount, price, symbol){

}