import {Tag} from "./model/tag";

let list: Tag[] = [];

async function setup() {
    try {
        const response: any = await fetch('http://localhost:8080/tag/all');
        const data = await response.json();
        data.forEach((tag: any) => {
            const tagObj = new Tag(tag.id, tag.tagUUID, tag.tagName, tag.secretKey, tag.tagValue);
            list.push(tagObj);
        });
        makeTable()
    } catch (exception) {
        console.log(exception);
    }
}

function makeTable() {
    let table = document.createElement('table');
    for (let row of list) {
        let tr = document.createElement('tr');
        for (let cell in row) {
            let td = document.createElement('td');
            td.appendChild(document.createTextNode(row[cell]));
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
}



setup();
