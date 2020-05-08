export const categoryIDAction=(id)=>{
    return(
        {
            type:'select_categoryID',
            payload:id
        }
    )
}

export const MobileIDAction=(id)=>{
    return(
        {
            type:'select_MobileID',
            payload:id
        }
    )
}

export const GameIDAction=(id)=>{
    return(
        {
            type:'select_GameID',
            payload:id
        }
    )
}

export const MenClothesIDAction=(id)=>{
    return(
        {
            type:'select_MenClothesID',
            payload:id
        }
    )
}

export const WomenClothesIDAction=(id)=>{
    return(
        {
            type:'select_WomenClothesID',
            payload:id
        }
    )
}

export const KidsClothesIDAction=(id)=>{
    return(
        {
            type:'select_KidsClothesID',
            payload:id
        }
    )
}

export const KitchenIDAction=(id)=>{
    return(
        {
            type:'select_KitchenID',
            payload:id
        }
    )
}

export const FurnitureIDAction=(id)=>{
    return(
        {
            type:'select_FurnitureID',
            payload:id
        }
    )
}

export const ElectronicsIDAction=(id)=>{
    return(
        {
            type:'select_ElectronicsID',
            payload:id
        }
    )
}

export const ModalAction=(val)=>{
    // console.log(status)
    return(
        {
            type:'set_ModalStatus',
            payload:val
        }
    )
}

export const CartAddAction =(val)=>{
    console.log(val)
    return(
        {
            type:'add_items',
            payload:val
        }
    )
}

export const CartDelAction =(val)=>{
    return(
        {
            type:'del_items',
            payload:val
        }
    )
}

export const updatePlusCart =(val)=>{
    return(
        {
            type:'update_Plus_cart',
            payload:val
        }
    )
}

export const updateMinusCart=(val)=>{
    return(
        {
            type:'update_Minus_cart',
            payload:val
        }
    )
}