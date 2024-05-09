/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const stateEl = document.getElementById('btn__state');
let state = parseInt(stateEl.innerHTML);
document.getElementById('btn__element').onclick = function() {
    stateEl.innerHTML = (++state).toString();
}