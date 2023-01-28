import movies from "./movies.json" assert {type: 'json'};
// console.log("Hello Prabh, assignment 2!");

const button = document.getElementById("button-submit");
const buttonCleanTable = document.getElementById("clean-table");
const tBody = document.querySelector("#movies");

function createTable() {

    tBody.innerHTML = "";

    tBody.classList.remove("clean-table")
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

function deleteTable() {

    tBody.classList.add("clean-table")
}

button.addEventListener("click", createTable);
buttonCleanTable.addEventListener("click", deleteTable);


function create3D() {
    console.log("goes here...")
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry( 1, 1,1,1);
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame( animate );

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render( scene, camera );
    };

    animate();
}

create3D()