

export const apiFetch = () => {
    return fetch("https://s3.us-east-2.amazonaws.com/ftilab.com/api/traffic-counter-cameras.json", {
        method: "GET"
    })
        .then((response) => {
            return response.json()
        })
        .catch((err) => {
            console.log(err);
        })
}


