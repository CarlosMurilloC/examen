document.addEventListener('DOMContentLoaded', function () {
    // Inicializa el mapa centrado en una ubicación específica
    const map = L.map('map').setView([-2.128943, -79.905985], 13); // Madrid, España

    // Agrega los tiles de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Añade un marcador de ejemplo
    L.marker([-2.128943, -79.905985]).addTo(map)
        .bindPopup('Que tristeza.')
        .openPopup();
});
