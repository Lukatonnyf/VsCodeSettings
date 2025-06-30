// cotação moeda do dia (ipotético)
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

const form = document.querySelector("form")
const amount  =  document.getElementById("amount")
const currency  = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

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
            
        case "GBP":
           convertCurrency(amount.value, GBP, "£")
           break
        


    }
}


function convertCurrency(amount, price, symbol){
   try{
    description.textContent = `${symbol} 1 = ${formatCurencyBRL(price)}`

    // Aplica a classe que exibe o footer para mostrar o resultado
    footer.classList.add("show-result")
   } catch(error) {
    // Remove a classe do footer removendo ele da tela
     footer.classList.remove("show-result")
     alert("Não foi possível connverter! Olhe se os dados estão corretos.")
   }

}

// Formata a moeda em real brasileiro
function formatCurencyBRL(value){
    // Converte para número para utilizar o toLocaleString para formatar no padrão
    // BRL (R$ 00,00)
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })

}