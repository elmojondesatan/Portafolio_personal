import { header } from "../header/header.js";
import { dataProyectos } from "../../data/data.js";

function proyectos(){
    let section = document.createElement('section');
    section.appendChild(header());
    section.appendChild(item());
    section.appendChild(listaProyectos());

    return section;

}

function listaProyectos(){
    let div = document.createElement('div');
    div.className = "Lista-proyectos";

    dataProyectos.forEach((proyecto)=>{
    div.appendChild(item(proyecto.nombre, proyecto.github, proyecto.web,proyecto.stacks));

    });

    return div;
}

function item(texto,github,web,stacks){
    let div = document.createElement('div');
    div.className = "div-item";

    let a = document.createElement('a');
    a.appendChild= "link-github-page";
    a.href = "https://github.com/elmojondesatan/Formulario";
    a.innerText = "githubPage";
    div.appendChild(a);
    
    let stack = document.createElement('div');
    stack.innerText = "[js,css,html]";
    div.appendChild(stack);

    let btnGithub = document.createElement('a');
    btnGithub.className = "btn-github";
    btnGithub.href = "https://github.com/elmojondesatan/Formulario";
    btnGithub.innerText = "Github";
    div.appendChild(btnGithub);

    return div;  

}


export{ proyectos}