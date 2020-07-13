import {combineReducers} from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer'

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['cart']
}
//dont need to white list user since firebase is taking care of the authentication so the user persists. Need to add any reducers that we need to white list in order for the data to persist. 

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
});



export default  persistReducer(persistConfig, rootReducer);