/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą. Vartotojui atėjus į tinklapį, kreipsis į cars.json failą
ir atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const outputEl = document.getElementById('output');
fetch('task4.json')
    .then(response => response.json())
    .then(json => {
        outputEl.innerHTML = json.reduce((carry, {brand, models}) => `<div>
            <h2>${brand}</h2>
            <ul>
                ${models.reduce((carry, model) => carry + `<li>${model}</li>`, "")}
            </ul>
        </div>` + carry, "")
    });
