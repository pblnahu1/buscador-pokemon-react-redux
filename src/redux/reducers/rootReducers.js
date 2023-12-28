import { combineReducers } from "redux";
import game_shop from "./gameShopReducer.js";
import buscador from "./buscadorReducer.js";

const rootReducer = combineReducers({
    game_shop,
    buscador
});

export default rootReducer;