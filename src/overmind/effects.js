export const api = {
    getUser() {
        return fetch('/user.json').then(data => data.json());
    }
}