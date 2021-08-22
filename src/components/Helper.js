

export const apiFetch = () => {
    return fetch("C:\Users\ShRee\Desktop\reactapp\src\components\api.json", {
        method: "GET"
    })
        .then((response) => {
            return response.json()
        })
        .catch((err) => {
            console.log(err);
        })
}


