import movies from "./movies.json" assert {type: 'json'};
// console.log("Hello Prabh, assignment 2!");

const button = document.getElementById("button-submit");


function createTable() {

    const tBody = document.querySelector("#movies")

    tBody.innerHTML = "";
    for (let index = 0; index < movies.length; index++) {
        const row = document.createElement("tr");
        // console.log("creating movie table",movies);

        //name
        const cellName = document.createElement("td");
        const cellText = document.createTextNode(` ${movies[index].name}`);
        cellName.appendChild(cellText);
        row.appendChild(cellName);

        //date
        const cellDateReleased = document.createElement("td");
        const cellTextDate = document.createTextNode(` ${movies[index].date_released}`);
        cellDateReleased.appendChild(cellTextDate);
        row.appendChild(cellDateReleased);

        //directors
        const cellDirectorList = document.createElement("td");
        const cellTextDirector = document.createTextNode(` ${movies[index].name_director}`);
        cellDirectorList.appendChild(cellTextDirector);
        row.appendChild(cellDirectorList);

        //actor
        const cellActor = document.createElement("td");
        const cellTextActor = document.createTextNode(` ${movies[index].key_actor}`);
        cellActor.appendChild(cellTextActor);
        row.appendChild(cellActor);

        //type
        const cellType = document.createElement("td");
        const cellTextType = document.createTextNode(` ${movies[index].type}`);
        cellType.appendChild(cellTextType);
        row.appendChild(cellType);


        tBody.appendChild(row)
    }

}

button.addEventListener("click", createTable)