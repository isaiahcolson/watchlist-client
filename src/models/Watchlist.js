// back end watchlist api url
const URL = 'http://localhost:3001/watchlists';

// class for Watchlist model that fetches watchlists from database
class Watchlist {
    static show = (watchlistId) => {
        return fetch(`${URL}/${watchlistId}`).then((response) => response.json());
    }

    static update = (watchlistId, titleId) => {
        console.log(watchlistId);
        console.log(titleId);
        return fetch(`${URL}/${watchlistId}/add`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({title: titleId})
        }).then((res) => res.json());
    }
}

// exports
export default Watchlist;