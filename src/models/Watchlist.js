// back end watchlist api url
const URL = 'https://dashboard.heroku.com/apps/isaiahcolson-watchlist-api/watchlists';

// class for Watchlist model that fetches watchlists from database
class Watchlist {
    static show = (watchlistId) => {
        return fetch(`${URL}/${watchlistId}`).then((response) => response.json());
    }

    static update = (watchlistId, titleId) => {
        return fetch(`${URL}/${watchlistId}/add`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({title: titleId})
        }).then((res) => res.json());
    }

    static updateRemove = (watchlistId, titleId) => {
        return fetch(`${URL}/${watchlistId}/remove`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({title: titleId})
        }).then((res) => res.json());
    }

    static updateReplace = (watchlistId, newWatchlist) => {
        return fetch(`${URL}/${watchlistId}/replace`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({titles: newWatchlist})
        }).then((res) => res.json());
    }
}

// exports
export default Watchlist;