const estado = document.getElementById('estado');

// Una sola función para ambos controles: el resultado es el mismo,
// la diferencia está en quién puede activarlos.
function guardar(origen) {
    const hora = new Date().toLocaleTimeString('es');
    estado.textContent = `Cambios guardados (${origen}) a las ${hora}.`;
}

// 'click' se dispara con ratón, toque, Enter y Espacio en un <button>
document.getElementById('guardar').addEventListener('click', () => {
    guardar('botón accesible');
});