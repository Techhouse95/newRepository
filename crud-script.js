let crudApp = new crudAppFunction();

this.avaliable_pets = [
    { ID: '1', Име: 'Бък', Вид: 'Куче', Порода: 'Доберман', Възраст: '1г.', Тегло: '35кг'},
    { ID: '2', Име: 'Джеси', Вид: 'куче', Порода: 'Пинчер', Възраст: '6м.', Тегло: '5кг.'},
    { ID: '3', Име: 'Миси', Вид: 'котка', Порода: 'Британска', Възраст: '4г.', Тегло: '3кг.'},
    { ID: '4', Име: 'Мърчо', Вид: 'котка', Порода: 'Персийска', Възраст: '3г.', Тегло: '2.5кг.'},
]

// this.createTable = function(){
//     for (let i = 0; i < this.avaliable_pets.length; i++){
//         for
//     }
// }

this.col = [];

let table = document.createElement('table');
table.setAttribute('id', 'petsTable');

let tr = table.insertRow(-1);

for (let h = 0; h < this.avaliable_pets.length; h++){
    let th = document.createElement("th");
    th.innerHTML = this.col[h].replace('_', ' ');
    tr.appendChild(th);
}

for (let i = 0; i<this.avaliable_pets.length; i++){
    tr = table.insertRow(-1);

    for (let j = 0; j < this.col.length; j++){
        let tabCell = tr.insertCell(-1);
        tabCell.innerHTML = this.avaliable_pets[i][this.col[j]];
    }

    this.td = document.createElement('td');
}

tr.appendChild(this.td);

let div = document.getElementById('container');
div.innerHTML = '';
div.appendChild(table);


crudApp.createTable();