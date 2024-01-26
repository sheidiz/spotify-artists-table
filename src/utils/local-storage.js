export const getUserFromLocalStorage = (USER_KEY, UserEmptyState) => {
    let user = localStorage.getItem(USER_KEY);
    if (!user) {
        user = UserEmptyState;
    } else {
        user = JSON.parse(user);
    }

    return user;
}
export const getArtistsFromLocalStorage = (ARTISTS_KEY, ArtistsEmptyState) => {
    let artists = localStorage.getItem(ARTISTS_KEY);
    if (!artists) {
        artists = ArtistsEmptyState;
    } else {
        artists = JSON.parse(artists);
    }

    return artists;
}

export const saveInLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}