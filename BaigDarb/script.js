/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const form = document.querySelector('form');
const output = document.getElementById('output');

form.onsubmit = function (e) {
    e.preventDefault();

    const kg = parseFloat(e.target[0].value);
    if(isNaN(kg))
    {
        output.innerHTML = `<p class="error">${e.target[0].value} is not a number!</p>`;
        return;
    }

    const lb = kg * 2.2046;
    const g = kg / 0.0010000;
    const oz = kg * 35.274;

    output.innerHTML = `<ul class="converted">
        <li>Pounds: ${lb}</li>
        <li>Grams: ${g}</li>
        <li>Ounces: ${oz}</li>
    </ul>`;
}