//Definimos la ruta de donde consultaremos los recursos
const API_URL = 'https://jsonplaceholder.typicode.com'
//Obtenemos el elemento del DOM html donde arrojaremos la info
const HTMLResponse = document.querySelector('#appcomments');
//creamos el elemento donde arrojaremos la info
const ol = document.createElement('ol');

fetch(`${API_URL}/comments`)
      .then(response => response.json())
      .then((comments) => {
        comments.forEach((comment) => {
            // Creamos el elemento li para almacenar cada comentario en el ol
            let elem = document.createElement('li');
            elem.appendChild(
              document.createTextNode(`${comment.name} || ${comment.body}`)
            );
            //Agregamos name dentro del li y dentro de ol
            ol.appendChild(elem);
        });
        //Al final agregamos el ol dentro del div obtenido
        HTMLResponse.appendChild(ol);
      })
      .catch((error) =>{
        console.error('error en la solicitud')
      })