import {} from './data.js';

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
        <h4>${item.gender}</h4> 
        <h4>${item.species}</h4>
        <h4>${item.status}</h4>
        <h4>${item.origin.name}</h4>
        <h4>${item.location.name}</h4>

        </div>
    </div>

    `

    )

}
printarCards(data.results);





