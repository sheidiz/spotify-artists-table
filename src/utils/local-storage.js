export const getUserFromLocalStorage = (USER_KEY, UserEmptyState) => {
    let user = localStorage.getItem(USER_KEY);
    if (!user) {
        user = UserEmptyState;
    } else {
        user = JSON.parse(user);
    }

    return user;
}

export const saveInLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}