// Definimos la ruta de donde consultaremos los recursos
const API_URL = 'https://jsonplaceholder.typicode.com';
// Obtenemos el elemento del DOM html donde arrojaremos la info
const HTMLResponse = document.querySelector('#appphotos');
// Creamos el contenedor div donde arrojaremos las fotos
const divContainer = document.createElement('div');

fetch(`${API_URL}/photos`)
  .then(response => response.json())
  .then((photos) => {
    photos.forEach((photo) => {
      // Creamos el elemento div para almacenar cada foto
      let photoDiv = document.createElement('div');
      // Creamos el elemento img para mostrar la imagen
      let img = document.createElement('img');
      img.src = photo.thumbnailUrl; // Usamos thumbnailUrl para obtener la miniatura de la foto
      img.alt = photo.title; // Ponemos el título como texto alternativo

      // Creamos un elemento p para mostrar el título de la foto
      let title = document.createElement('p');
      title.textContent = photo.title;

      // Agregamos la imagen y el título al div de la foto
      photoDiv.appendChild(img);
      photoDiv.appendChild(title);

      // Agregamos el div de la foto al contenedor principal
      divContainer.appendChild(photoDiv);
    });
    // Al final agregamos el contenedor div dentro del div obtenido
    HTMLResponse.appendChild(divContainer);
  })
  .catch((error) => {
    console.error('error en la solicitud');
  });