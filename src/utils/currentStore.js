const displayCurrentStore = (authObject) => {
    if (authObject.chosenStore) {
        return authObject.chosenStore;
    }
    return authObject.user.storeId;
};

export default displayCurrentStore;
