table = document.querySelector('table');
const buttons = document.getElementById('grid-buttons');
const b2 = document.querySelector('#b2');
const b3 = document.querySelector('#b3');
const b4 = document.querySelector('#b4');

data = null
// read the bofrost.json file and print it
fetch('bofrost.json')
    .then(response => response.json())
    .then(dataa => {
        dataa.forEach(element => element.PREZZO = parseFloat(element.PREZZO.replace(",", ".")));
        data = dataa
    })   
    .catch(error => console.error(error));

b1.addEventListener('click', printFasciaBF1);
b2.addEventListener('click', printFasciaBF1);

buttons.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      button.classList.toggle("active");
    });
  });  

function printAllData(data) {
    table.innerHTML = `
            <tr>
                <th>CATEGORIA</th>
                <th>PAGGINA</th>
                <th>CODICE</th>
                <th>NOME</th>
                <th>PREZZO</th>
            </tr>
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

function printCustomData(data) {
    console.log(data);
    tableBox(data);
}

function tableBox(data) {
    table.innerHTML = `
            <tr class="box">
                <th>CODICE</th>
                <th>PAGGINA</th>
                <th>NOME</th>
            </tr>
        `;
    for (let i = 0; i < 30; i++) {
        table.innerHTML += `<div class="boxTable"></div>`;
        for (let j = 0; j < data[i].length; j++) {
            document.querySelector(".boxTable:last-child").innerHTML += `
            <tr class="boxTr">
                <td>${data[i][j].CODICE}</td>
                <td>${data[i][j].PAGGINA}</td>
                <td>${data[i][j].NOME}</td>
            </tr>
            `;
        }
    }
}

// data.filter(item => item.CATEGORIA === 'Gelati' && item.SOTTOCATEGORIA === 'biscotto' && item.PAGGINA === 9);
function printFasciaBF1() {
    document.getElementById("grid-buttons").style.display = "none";
    listy = [];
    data.forEach(element => {
        data.forEach(element2 => {
            data.forEach(element3 => {
                if (element.CATEGORIA != element2.CATEGORIA
                && element.CATEGORIA != element3.CATEGORIA
                && element2.CATEGORIA != element3.CATEGORIA
                && element.PREZZO + element2.PREZZO >= 25
                && element.PREZZO + element3.PREZZO >= 25
                && element2.PREZZO + element3.PREZZO >= 25
                && element.PREZZO + element2.PREZZO + element3.PREZZO >= 36) {
                    listy.push([element, element2, element3]);
                }
            });
        });
    });
    printCustomData(listy);
}

function printFasciaBF2() {
    listy = [];
    let count = 0
    data.forEach(element => {
        data.forEach(element2 => {
            data.forEach(element3 => {
                data.forEach(element4 => {
                    if (element.CATEGORIA != element2.CATEGORIA
                    && element.CATEGORIA != element3.CATEGORIA
                    && element.CATEGORIA != element4.CATEGORIA
                    && element2.CATEGORIA != element3.CATEGORIA
                    && element2.CATEGORIA != element4.CATEGORIA
                    && element3.CATEGORIA != element4.CATEGORIA
                    && element.PREZZO + element2.PREZZO >= 25
                    && element.PREZZO + element3.PREZZO >= 25
                    && element.PREZZO + element4.PREZZO >= 25
                    && element2.PREZZO + element3.PREZZO >= 25
                    && element2.PREZZO + element4.PREZZO >= 25
                    && element3.PREZZO + element4.PREZZO >= 25
                    && element.PREZZO + element2.PREZZO + element3.PREZZO >= 36
                    && element.PREZZO + element2.PREZZO + element4.PREZZO >= 36
                    && element.PREZZO + element3.PREZZO + element4.PREZZO >= 36
                    && element2.PREZZO + element3.PREZZO + element4.PREZZO >= 36) {
                        if (element.PREZZO + element2.PREZZO + element3.PREZZO >= 36)
                            listy.push([element, element2, element3]);
                        if (element.PREZZO + element2.PREZZO + element4.PREZZO >= 36)
                            listy.push([element, element2, element4]);
                        if (element.PREZZO + element3.PREZZO + element4.PREZZO >= 36)
                            listy.push([element, element3, element4]);
                        if (element2.PREZZO + element3.PREZZO + element4.PREZZO >= 36)
                            listy.push([element2, element3, element4]);
                        count++
                        if (count % 10000 == 0)
                            console.log(count);
                    }
                });
            });
        });
    });
    printCustomData(listy);
}

function printFasciaB4() {
    console.log("Cliccato b4");
    fb4 = [];
    data.forEach(element => {
    });
    printCustomData(fb4);
}