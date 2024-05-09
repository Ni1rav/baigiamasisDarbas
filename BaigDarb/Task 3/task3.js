/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
const output = document.getElementById('output');

document.getElementById('btn').onclick = async function () {
    const response = await fetch(ENDPOINT);
    const json = await response.json();

    const rows = json.reduce((previousValue, {login, avatar_url}) => previousValue + `
        <tr>
            <td><img src="${avatar_url}" alt="${avatar_url}"/></td>
            <td>${avatar_url}</td>
            <td>${login}</td>
        </tr>
    `, "");

    output.innerHTML = `<table>
        <thead>
            <tr>
                <th>Avatar</th>   
                <th>Avatar url</th>   
                <th>Username</th>   
            </tr>
        </thead>
        <tbody>
            ${rows}
        </tbody>
    </table>`;
}
