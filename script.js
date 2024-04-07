table = document.querySelector('table');

// read the bofrost.json file and print it
fetch('bofrost.json')
    .then(response => response.json())
    .then(data => printAllData(data));

function printAllData(data) {
    table.innerHTML = `
        <table>
            <tr>
                <th>CATEGORIA</th>
                <th>PAGGINA</th>
                <th>CODICE</th>
                <th>NOME</th>
                <th>PREZZO</th>
            </tr>
        </table>
        `;
    for (let i = 0; i < data.length; i++) {
        table.innerHTML += `
            <tr>
                <td>${data[i].CATEGORIA}</td>
                <td>${data[i].PAGGINA}</td>
                <td>${data[i].CODICE}</td>
                <td>${data[i].NOME}</td>
                <td>${data[i].PREZZO}</td>
            </tr>
        `;
    }
}