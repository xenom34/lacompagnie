try {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "email": "truc.muche@altair-studios.fr",
        "password": "borgar",
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw

    };

    const response = await fetch("https://api.altair-studios.fr:4318/compagnie/auth/login",requestOptions)
    console.log(response.json())
    response.headers.forEach((e) => console.log(e))
    console.log('auth'+response.headers.has('auth_token'))
    console.log('auth'+response.headers.get('auth_token'))


} catch (e) {
    console.log(e)
}