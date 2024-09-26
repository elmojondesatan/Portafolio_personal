import { header } from "../header/header.js";
function proyectos(){
    let section = document.createElement('section');
    section.appendChild(header());
    section.appendChild(item());

    return section;

}


function item(){
    let div = document.createElement('item');
    div.innerText = "item de Lista ";

    return div;

}


export{ proyectos}