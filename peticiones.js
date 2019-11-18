async function getJSON(url) {
    const res = await fetch(url);
 
    if (!res.ok) {
        throw new Error(res.status); // 404
    }
 
    const data = await res.json();
    return data;
}
 
async function postJSON(url, obj) {
    const options = {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const res = await fetch(url,options);
 
    if (!res.ok) {
        throw new Error(res.status); // 404
    }
 
    const data = await res.json();
    return data;
}

async function putJSON(url, obj) {
    const options = {
        method: 'PUT',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const res = await fetch(url,options);
 
    if (!res.ok) {
        throw new Error(res.status); // 404
    }

    const data = await res.json();
    return data;
}

async function deleteJSON(url, obj) {
    const options = {
        method: 'DELETE',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const res = await fetch(url,options);
 
    if (!res.ok) {
        throw new Error(res.status); // 404
    }

    const data = await res.json();
    return data;
}

export {getJSON, postJSON, putJSON, deleteJSON};