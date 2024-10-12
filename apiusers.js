//definimos la ruta de donde consultaremos los recursos
const API_URL = "https://jsonplaceholder.typicode.com";
//obtener el elemento del DOM html donde arrojaremos la infoemacion 
const HTMLResponse = document.querySelector("#app");
//creamos el elemento donde arrojaremos la inf.
const ul = document.createElement("ul");

fetch(`${API_URL}/users`)
      .then((response) => response.json())
      .then((users) => {
        users.forEach ((user) => {
            //creamos el elemento li para almacenar cada usuario en ul 
            let elem = document.createElement("li");
            elem.appendChild(
                document.createTextNode(`${user.name} | ${user.phone} | ${user.email} | ${user.company.name}`)
            );
            //agregamos el name dentro del li y dentro del ul 
            ul.appendChild(elem);

        });
        //al final agregamos el ul dentro del div obtenido
        HTMLResponse.appendChild(ul)
      }).catch((error) => {
        console.error("error en la solicitud");
      });