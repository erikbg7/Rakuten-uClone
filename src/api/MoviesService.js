const api = "https://gizmo.rakuten.tv/v3";
const proxyURL = "https://cors-anywhere.herokuapp.com/";
const defaultOptions= 'classification_id=5&device_identifier=web&locale=es&market_code=es';


/////////////////////////CONSULTAS A LA API///////////////////////////

export const getInTheater = () =>
  fetch(`${proxyURL}${api}/lists/estrenos-imprescindibles-en-taquilla?${defaultOptions}`)
    .then(res => res.json())
    .then(data => data.data.contents.data)


export const getMostViewed = () =>
    fetch(`${proxyURL}${api}/lists/peliculas-mas-vistas-en-alquiler?${defaultOptions}`)
        .then(res => res.json())
        .then(data => data.data.contents.data)


export const getForKids = () =>
    fetch(`${proxyURL}${api}/lists/pelis-infantiles-para-ver-una-y-otra-vez?${defaultOptions}`)
        .then(res => res.json())
        .then(data => data.data.contents.data)

export const getMostPopular = () =>
    fetch(`${proxyURL}${api}/lists/peliculas-populares-en-compra?${defaultOptions}`)
        .then(res => res.json())
        .then(data => data.data.contents.data)

export const getAwarded = () =>
    fetch(`${proxyURL}${api}/lists/si-te-perdiste?${defaultOptions}`)
        .then(res => res.json())
        .then(data => data.data.contents.data)

export const getSpecificMovie = movieID =>
  fetch(`${proxyURL}${api}/movies/${movieID}?${defaultOptions}`)
    .then(res => res.json())
    .then(data => data.data)

export const getMovieImage = movieID =>
  fetch(`${proxyURL}${api}/movies/${movieID}?${defaultOptions}`)
    .then(res => res.json())
    .then(data => data.data.images)

export const search = query =>
  fetch(`${proxyURL}${api}/movies/?query=${query}&${defaultOptions}`)
    .then(res => res.json())
    .then(data => data.data)
