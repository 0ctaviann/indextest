table = document.querySelector('table');

// read the bofrost.json file and print it
fetch('bofrost.json')
    .then(response => response.json())
    .then(data => printAllData(data));

function printAllData(data) {
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