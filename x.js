const selectEl = document.createElement("select");
document.body.appendChild(selectEl);
const btn = document.querySelector("#getCurrencies");
const getCurrencyList = "https://api.frankfurter.app/latest";
const fetchGetCurrencyList = () => {
  fetch(getCurrencyList)
    .then((response) => response.json())
    .then((data) => {
      selectEl.innerHTML = "";
      const currencyRates = data.rates;
      const keys = Object.keys(currencyRates);
      console.log(keys);
      selectEl.setAttribute("id", "currency");
      for (let i = 0; i < keys.length; i++) {
        const optn = keys[i];
        const optionEl = document.createElement("option");
        optionEl.textContent = optn;
        optionEl.value = optn;
        selectEl.appendChild(optionEl);
      }
    });
};
btn.addEventListener("click", fetchGetCurrencyList);
