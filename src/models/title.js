const URL = `http://localhost:3001/titles`;

class TitleModel {
    static all = () => {
        return fetch(URL).then((response) => response.json());
    }
}

export default TitleModel;