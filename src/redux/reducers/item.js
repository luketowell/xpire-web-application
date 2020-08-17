const initialState = {
    items: [],
    categories:[],
    status:[],
    individualAction:{},
    addedAction:{},
    chosenCategory: {}
}

const ItemReducer = (state = initialState, action) => {
    switch(action.type){
        default: {
            return {
                ...state
            }
        }
    }
}

export default ItemReducer