
export const getMovie = (name) => {
    const url = `https://www.omdbapi.com/?apikey=ed9a5fdf&t=${name}`
    return fetch(url)
        .then((response) => response.json());
        

}