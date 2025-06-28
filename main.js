import equiposData from './data/equipos.js';

const tablaContainer = document.getElementById("tabla-container");

fetch('./partials/tablaequipos.hbs')
  .then(res => res.text())
  .then(templateText => {
    const template = Handlebars.compile(templateText);
    const html = template(equiposData);
    tablaContainer.innerHTML = html;
  })
  .catch(err => {
    tablaContainer.innerHTML = "<p>Error cargando la tabla.</p>";
    console.error(err);
  });

