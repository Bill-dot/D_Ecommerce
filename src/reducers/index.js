import {combineReducers} from 'redux'
import CategoriesReducer from './CategoriesReducer'
import CategoryIDReducer from './CategoryIDReducer'
import MobileReducer from './MobileReducer'
import GameReducer from './GameReducer'
import MenReducer from './MenReducer'
import WomenReducer from './WomenReducer'
import KidReducer from './KidReducer'
import KitchenReducer from './KitchenReducer'
import FurnitureReducer from './FurnitureReducer'
import ElectronicsReducer from './ElectronicsReducer'
import ModalReducer from './ModalReducer'
import CartReducer from './CartReducer'

export default combineReducers({
    CategoryList: CategoriesReducer,
    CategoryID: CategoryIDReducer,
    MobileList: MobileReducer,
    GameList: GameReducer,
    MenList: MenReducer,
    WomenClothesList: WomenReducer,
    KidClothesList : KidReducer,
    KitchenList: KitchenReducer,
    FurnitureList: FurnitureReducer,
    ElectronicList: ElectronicsReducer,
    ModalStatus:ModalReducer,
    Cart: CartReducer
})