const URL = `http://localhost:3001/auth`;

class UserModel {
    static create(data) {
        return fetch(`${URL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
    }

    static login(credentials) {
        return fetch(`${URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify(credentials)
        }).then(res => res.json());
    }

    static logout() {
        return fetch(`${URL}/logout`, {
            method: "DELETE",
            credentials: 'include'
        });
    }
}

export default UserModel;