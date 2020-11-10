import env from '../environment';

export const fetchData = async (query) => {
    return await fetch(`${env.url}${query}`, {
        method: 'GET',
        headers: {
            'X-CoinAPI-Key': env.apiKey,
            Accept: 'application/json'
        }
    })
        .then((response) => {
            if (response.status === 200) {
                return response;
            }
            else {
                console.error(response.statusText);
            }
        })
        .catch(error => console.error(error));
}

export const sortBy = (items, property) => {
    return items.sort((a, b) => {
        if (parseFloat(a[`${property}`]) < parseFloat(b[`${property}`]))
            return 1;
        else if (parseFloat(a[`${property}`]) === parseFloat(b[`${property}`]))
            return 0;
        else
            return 0;
    })
}