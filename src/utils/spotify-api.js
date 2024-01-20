export const getAccessToken = () => {
    const queryParams = window.location.hash
        .substring(1)
        .split('&')
        .reduce((acc, current) => {
            const [key, value] = current.split('=');
            acc[key] = decodeURIComponent(value);
            return acc;
        }, {});

    return queryParams.access_token;
};

export const getTopArtists = async (token) => {
    try {
        const response = await fetch('https://api.spotify.com/v1/me/top/artists?limit=7', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.ok) {
            const data = await response.json();
            return data.items;
        } else {
            console.error('Error al obtener los artistas principales:', response.statusText);
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
    }
};
export const getProfile = async (token) => {
    try {
        const response = await fetch('https://api.spotify.com/v1/me', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.error('Error al obtener perfil:', response.statusText);
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
    }
};
