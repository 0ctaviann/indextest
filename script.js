table = document.querySelector('table');
const buttons = document.getElementById('grid-buttons');
b2 = document.querySelector('#b2');
b3 = document.querySelector('#b3');
b4 = document.querySelector('#b4');

data = null
// read the bofrost.json file and print it
fetch('bofrost.json')
    .then(response => response.json())
    .then(dataa => {
        dataa.forEach(element => element.PREZZO = parseFloat(element.PREZZO.replace(",", ".")));
        data = dataa
    })   
    .catch(error => console.error(error));

b2.addEventListener('click', printFasciaB2);
b3.addEventListener('click', printFasciaB2);
b4.addEventListener('click', printFasciaB2);

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
}

// data.filter(item => item.CATEGORIA === 'Gelati' && item.SOTTOCATEGORIA === 'biscotto' && item.PAGGINA === 9);
function printFasciaB2() {
    fB2 = [];
    data.forEach(element => {
        data.forEach(element2 => {
            if (element.CATEGORIA != element2.CATEGORIA
            && !fB2.some(arr => arr[0] === element2 && arr[1] === element)
            && element.PREZZO + element2.PREZZO > 36) {
                fB2.push([element, element2]);
            }
        });
    });
    printCustomData(fB2);
}

function printFasciaB3() {
    console.log("Cliccato b3");
    fb3 = [];
    count = 1;
    data.forEach(element => {
        data.forEach(element2 => {
            data.forEach(element3 => {
                if (element.CATEGORIA != element2.CATEGORIA
                && element.CATEGORIA != element3.CATEGORIA
                && element2.CATEGORIA != element3.CATEGORIA
                && !fb3.some(arr => arr[0] === element3 && arr[1] === element2 && arr[2] === element)
                && !fb3.some(arr => arr[0] === element2 && arr[1] === element3 && arr[2] === element)
                && element.PREZZO + element2.PREZZO + element3.PREZZO > 36) {
                    fb3.push([element, element2, element3]);
                }
                console.log(count++);
            });
        });
    });
    printCustomData(fb3);
}

function printFasciaB4() {
    console.log("Cliccato b4");
    fb4 = [];
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
                    && !fb4.some(arr => arr[0] === element4 && arr[1] === element3 && arr[2] === element2 && arr[3] === element)
                    && !fb4.some(arr => arr[0] === element3 && arr[1] === element4 && arr[2] === element2 && arr[3] === element)
                    && !fb4.some(arr => arr[0] === element2 && arr[1] === element3 && arr[2] === element4 && arr[3] === element)
                    && !fb4.some(arr => arr[0] === element4 && arr[1] === element2 && arr[2] === element3 && arr[3] === element)
                    && !fb4.some(arr => arr[0] === element3 && arr[1] === element2 && arr[2] === element4 && arr[3] === element)
                    && !fb4.some(arr => arr[0] === element2 && arr[1] === element4 && arr[2] === element3 && arr[3] === element)
                    && element.PREZZO + element2.PREZZO + element3.PREZZO + element4.PREZZO > 36) {
                        fb4.push([element, element2, element3, element4]);
                    }
                });
            });
        });
    });
    printCustomData(fb4);
}