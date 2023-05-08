client_id = "91b7ed5b61984131a7d7425d890dbdcf";
client_secret = "35557b16e54348f2a386df61ece15d06";
fetch(
    "https://accounts.spotify.com/api/token",
    {
        headers: {
            'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret),
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: "POST",
        body: new URLSearchParams({
            grant_type: "client_credentials"
        })
    }
)
    .then(r => r.json())
    .then(reponse => {
        localStorage.setItem('token', reponse['access_token']);
    });

function recherche() {
    const artiste = document.getElementById('recherche').value;
    fetch("https://api.spotify.com/v1/search?query=" + artiste + "&type=artist",
        {
            headers: {
                'Authorization': 'Bearer ' + window.localStorage.getItem('token')
            }
        })
        .then(r => r.json())
        .then(reponse => {
            // console.log(reponse);
            document.getElementById('artistes').innerHTML = '';
            for (const artiste of reponse['artists']['items']) {
                let div_artiste = document.createElement('div');
                div_artiste.innerText = artiste['name'];
                div_artiste.id = artiste['id'];
                div_artiste.addEventListener('click', son);
                document.getElementById('artistes').appendChild(div_artiste);
            }
        });
}

function son(evt) {
    fetch("https://api.spotify.com/v1/artists/" + evt.target.id + "/top-tracks?market=FR",
        {
            headers: {
                'Authorization': 'Bearer ' + window.localStorage.getItem('token')
            }
        })
        .then(r => r.json())
        .then(reponse => {
            let audio = new Audio(reponse['tracks'][0]['preview_url']);
            audio.play().catch(err => console.log(err));
        })
}