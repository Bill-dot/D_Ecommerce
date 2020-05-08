const val ={
    isModalVisible:false,
    pressedItem:{

    }
}

export default ModalReducer =(state=val, action)=>{
    switch(action.type){
        case 'set_ModalStatus':
            console.log("calling")
            return {...state, isModalVisible:!state.isModalVisible, pressedItem:action.payload}
        default :
            return state    
    }
}