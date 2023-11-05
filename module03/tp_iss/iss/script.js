let map;
let marker;

function getLatLong() {
    fetch("http://api.open-notify.org/iss-now.json")
        .then(data => data.json())
        .then(json => {
            const latitude = json['iss_position']['latitude'];
            const longitude = json.iss_position.longitude;
            document.getElementById('position').innerText = latitude + ' ' + longitude;
            marker.setLatLng([latitude, longitude]);
            map.flyTo([latitude, longitude]);
        });
}

function init() {
    map = L.map('map').setView([51.505, -0.09], 13);
    let uneIcone = L.icon({
        iconUrl: 'image/iss.png',
        iconSize: [64, 64],
        iconAnchor: [32, 32],
        popupAnchor: [-3, -76]
    });
    marker = L.marker([51.505, -0.09], {icon: uneIcone}).addTo(map);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    setInterval(
        getLatLong,
        5000
    );
}

onload = init;