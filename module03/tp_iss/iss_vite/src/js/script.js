export const issModule = () => {

    let map, marker;

    const init_carte = () => {
        const latitude = 48.85808672815468;
        const longitude = 2.2948842885382748;
        map = L.map('map').setView([latitude, longitude], 10,);
        let myIcon = L.icon({
            iconUrl: 'image/iss.png',
            iconSize: [64, 64],
            iconAnchor: [32, 32],
            popupAnchor: [-3, -76]
        });
        marker = L.marker([latitude, longitude], {icon: myIcon});
        marker.addTo(map);
        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}\'', {
            maxZoom: 5,
            minZoom: 2,
        }).addTo(map);
    }

    const init_interval = () => {
        setInterval(
            () => {
                fetch("http://api.open-notify.org/iss-now.json")
                    .then(r => r.json())
                    .then((donnees) => {
                        let latitude = donnees.iss_position.latitude;
                        let longitude = donnees.iss_position.longitude;
                        $("#issPosition").text("Latitude = " + latitude + " | " + "Longitude = " + longitude);
                        map.panTo([latitude, longitude]);
                        marker.setLatLng([latitude, longitude]);
                    })
            }, 5000);
    }
    const init_naute_qui_discute = () => {
        let textNaute = $("#textNaute");
        $("#astronautes")[0].addEventListener('click', () => {
            textNaute[0].style.visibility === 'visible' ? textNaute[0].style.visibility = "hidden" : textNaute[0].style.visibility = "visible";
        })
        fetch("http://api.open-notify.org/astros.json")
            .then(r => r.json())
            .then((donnees) => {
                let peopleInSpace = donnees.people;
                let peopleInISS = [];
                for (let i = 0; i < peopleInSpace.length; i++) {
                    if (peopleInSpace[i].craft === 'ISS') {
                        peopleInISS.push(peopleInSpace[i].name);
                    }
                }
                let string = peopleInISS.toString()
                let personnePresente = `Bonjour, je suis naute, les personnes présentes dans l'iss actuellement sont : ${string} et moi`;
                $("#textNaute").text(personnePresente);
            })
        textNaute[0].style.visibility = "hidden";
    }

    const init_particules = () => {
        Particles.init
        ({
            selector:
                '.background',
            color: ['#FFFFFF'],
            maxParticles: 1000,
            speed: 0.1
        });
    }

    const initialisation = () => {
        init_carte();
        init_particules();
        init_naute_qui_discute();
        init_interval();
    }

    return {
        initialisation
    }
}