import { combineReducers } from "redux";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage"

import directoryReducer from "./directory/directoryReducer";
import shopReducer from "./shop/shopReducer";
import userReducer from "./user/userReducer";
import cartReducer from './cart/cartReducer';


const persistConfig = {
    key :"root",
    storage ,
    whitelist:["cart"]
}

const rootReducer = combineReducers({
    directory :directoryReducer,
    user:userReducer,
    shop:shopReducer ,
    cart : cartReducer
})

export default persistReducer(persistConfig , rootReducer);