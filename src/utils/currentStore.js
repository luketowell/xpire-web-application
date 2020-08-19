const displayCurrentStore = (authObject) => {
    if (authObject.chosenStore){
        return (
            this.props.auth.chosenStore
        )
    }
    return (
        authObject.user.storeId
    )
}

export default displayCurrentStore