// back end title api url
const URL = `http://localhost:3001/titles`;

// class for Title model that fetches titles from database
class TitleModel {
    static all = () => {
        return fetch(URL).then((response) => response.json());
    }
}

// exports
export default TitleModel;