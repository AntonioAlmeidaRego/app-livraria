export default class RequestController {
    $getJSON = async (url) =>{
        let objeto = fetch(url)
        const api = await objeto
        return api;
    };

    $getJSONToken = async(url, token)=>{
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", "Bearer "+token);

        const data ={
            method: 'GET',
            headers: headers,
        };

        let objeto = fetch(url, data)
        const api = await objeto
        return api;
    };

    $postJSONToken = async (url, objetoRequest, token)=>{
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", "Bearer "+token);
        headers.append("Accept",  'application/json');

        const data ={
            method: 'POST',
            credentials: 'same-origin',
            mode: 'same-origin',
            body: JSON.stringify(objetoRequest),
            headers: headers,
        };
        let objeto = fetch(url, data)
        const api = await objeto
        return api;
    };

    $postJSON = async (url, objetoRequest)=>{
        const data ={
            method: 'POST',
            credentials: 'same-origin',
            mode: 'same-origin',
            body: JSON.stringify(objetoRequest),
            headers: {
                'Accept':       'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken':  'csrftoken'
            }
        };
        let objeto = fetch(url, data)
        const api = await objeto
        return api;
    };

    $putJSONToken = async (url, objetoRequest, token)=>{
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", "Bearer "+token);
        headers.append("Accept",  'application/json');

        const data ={
            method: 'PUT',
            credentials: 'same-origin',
            mode: 'same-origin',
            body: JSON.stringify(objetoRequest),
            headers: headers,
        };
        let objeto = fetch(url, data)
        const api = await objeto
        return api;
    };

    $putJSON = async (url, objetoRequest)=>{
        const data ={
            method: 'PUT',
            credentials: 'same-origin',
            mode: 'same-origin',
            body: JSON.stringify(objetoRequest),
            headers: {
                'Accept':       'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken':  'csrftoken'
            }
        };
        let objeto = fetch(url, data)
        const api = await objeto
        return api;
    };

    $deleteJSON = async (url)=>{
        let objeto = fetch(url)
        const api = await objeto
        return api;
    };
}
