import {filterStatus} from './data.js';

import data from './data/rickandmorty/rickandmorty.js';


//////////função Printar cards na tela usando o map 

function printarCards(data) {
    document.getElementById("container-cards").innerHTML = data.map((item) => `
    <div class="cards">
        <img class="image" src="${item.image}"></img>
        <div class="names">
            <h3>${item.name}</h3>
        </div>
        <div class="txt-card"> 
        <p>${item.gender}</p> 
        <p>${item.species}</p>
        <p>${item.status}</p>
        <p>${item.origin.name}</p>
        <p>${item.location.name}</p>

        </div>
    </div>

    `

    )

}
printarCards(data.results);


const statusFilter = document.getElementById("status-filter");
statusFilter.addEventListener("change", function (event){

  const statusCards = filterStatus(data.results, event.target.value);
  printarCards(statusCards);
})

