export default CategoryIDReducer = (state = null, action) => {
    switch (action.type) {
        case 'select_categoryID':
            return action.payload
        default:
            return state
    }
}