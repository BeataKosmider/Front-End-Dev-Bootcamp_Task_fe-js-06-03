const btn = document.querySelector("#getCurrencies");
const GetCurrencyList = "https://api.frankfurter.app/latest";
const fetchGetCurrencyList = () => {
  fetch(GetCurrencyList)
    .then((response) => response.json())
    .then((data) => {
      const currencyRates = data.rates;
      const keys = Object.keys(currencyRates);
      console.log(keys);
      const selectEl = document.createElement("select");
      document.body.appendChild(selectEl);
      selectEl.setAttribute("id", "currency");
      for (let i = 0; i < keys.length; i++) {
        const optn = keys[i];
        const optionEl = document.createElement("option");
        optionEl.textContent = optn;
        optionEl.value = optn;
        optionEl.setAttribute("value", optn);
        selectEl.appendChild(optionEl);
      }
    });
};
btn.addEventListener("click", fetchGetCurrencyList);
/*korzystając z Frankfurter API, stwórz przycisk o id=”getCurrencies”, który wywołuje funkcję getCurrencyList, która wykona fetch wywołującą zapytanie pod adres https://api.frankfurter.app/latest. 

Zwrócony zostanie obiekt z listą dostępnych walut i ich wartości względem EUR. Twoim zadaniem jest stworzyć w JS element <select> i włożyć do niego <option>, które będą miały w sobie tekst odpowiadający kodom walut, a oprócz tego atrybut value ustawiony na taką samą wartość

Wyglądać to ma tak:

<selelect>
	<option value=”EUR”>EUR</option>
	...
</select>*/
