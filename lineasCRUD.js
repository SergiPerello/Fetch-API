import * as REST from './peticiones.js';

function getLineas() {
    REST.getJSON("https://localhost:44329/api/lineas")
            .then(data => console.log(data))
            .catch(error => console.log(error));
}

function postLineas(linea) {
    REST.postJSON("https://localhost:44329/api/lineas",linea)
            .then(data => console.log(data))
            .catch(error => console.log(error));
}

function putLineas(linea, id) {
    REST.getJSON("https://localhost:44329/api/lineas/get/"+id)
            .then(data => {console.log(data);postLineas()})
            .catch(error => console.log(error));
}

function deleteLineas(id) {
    console.log(id);
    REST.deleteJSON("https://localhost:44329/api/lineas/"+id)
    .then(data => console.log(data))
    .catch(error => console.log(error));
}

export {getLineas, postLineas, putLineas, deleteLineas};