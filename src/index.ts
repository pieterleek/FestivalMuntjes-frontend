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

function webSocketSetup() {
    const socket = new WebSocket('ws://localhost:8080/websocket');

// Connection opened
    socket.addEventListener('open', function (event) {
        socket.send('Hello Server!');
    });

// Listen for messages
    socket.addEventListener('message', function (event) {
        console.log('Message from server ', event.data);

       // remove old table
        document.body.innerHTML="";
        // clear list
        list = [];
        setup()
    })
}

function makeTable() {

    let table = document.createElement('table');
    table.className = "table table-striped";
    let thead = document.createElement('thead');
    let tr = document.createElement('tr');
    let th = document.createElement('th');
    th.appendChild(document.createTextNode("ID"));
    tr.appendChild(th);
    th = document.createElement('th');
    th.appendChild(document.createTextNode("Tag UUID"));
    tr.appendChild(th);
    th = document.createElement('th');
    th.appendChild(document.createTextNode("Tag Name"));
    tr.appendChild(th);
    th = document.createElement('th');
    th.appendChild(document.createTextNode("Secret Key"));
    tr.appendChild(th);
    th = document.createElement('th');
    th.appendChild(document.createTextNode("    Value"));
    tr.appendChild(th);
    thead.appendChild(tr);
    table.appendChild(thead);

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


webSocketSetup();
