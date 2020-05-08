const cart = {
    item: [

    ],
    totalCost: 0,
    numberOfItems:1

}

export default CartReducer = (state = cart, action) => {
    const { item, totalCost } = state
    switch (action.type) {
        case 'add_items':
            return { ...state, item: [...state.item, action.payload], totalCost:state.totalCost+action.payload.cost }
        case 'update_Plus_cart':
            return{
                ...state,
                item:item.map((product,i)=>{
                    if(product.title===action.payload.title){
                        return{...product, quantity:state.item[i].quantity+1}
                    }
                    return product
                }),
                totalCost:state.totalCost+action.payload.cost
            }
        case 'update_Minus_cart':
            return{
                ...state,
                item:item.map((product,i)=>{
                    if(product.title===action.payload.title){
                        return{...product, quantity:state.item[i].quantity-1}
                    }
                    return product
                }),
                totalCost:state.totalCost-action.payload.cost
            }
        case 'del_items':
            return { ...state, item: state.item.filter((item) => { return (item.title != action.payload.title) }), totalCost:state.totalCost-action.payload.cost }
        default:
            return state    
    }
}