// back end title api url
const URL = `https://isaiahcolson-watchlist.herokuapp.com/titles`;

// class for Title model that fetches titles from database
class TitleModel {
    static all = () => {
        return fetch(URL).then((response) => response.json());
    }

    static show = (titleId) => {
        return fetch(`${URL}/${titleId}`).then((response) => response.json());
    }
}

// exports
export default TitleModel;