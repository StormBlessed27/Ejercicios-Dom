const d = document,
  n = navigator;

export default function detectGeolocalizacion(id) {
  const $divGeo = d.getElementById(id),
    options = {
      enableHighAccuracy: false,
      time: 5000,
      maximunAge: 0,
    };

  const succes = (position) => {
    const coords = position.coords;
    $divGeo.innerHTML = `
    <p>Tus coordenadas son(aproximadamente)</p>
    <ul>
    <li>Latitud: ${coords.latitude}</li>
    <li>Longitud: ${coords.longitude}</li>
    <li>Precision: ${coords.accuracy}</li>
    </ul>
    <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" rel="noopener" target="blank">ver en google maps</a>
    
    
    `;
  };
  const gError = (err) => {
    $divGeo.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`;
    console.log(`Error ${err.code}: ${err.message}`);
  };
  n.geolocation.getCurrentPosition(succes, gError, options);
}
