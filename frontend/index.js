async function sendPostRequest(url, data){
    return await fetch(
        url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    )
    .then(response => response.json())
    .catch((error) => {console.error(error)})
}


sendPostRequest(
    'http://127.0.0.1:8000/auth/users/activation/',
    {
        uid: "MTA",
        token: "bmnfky-81910e40653862b6a34c8f8f30b3fc9b"
    }
)