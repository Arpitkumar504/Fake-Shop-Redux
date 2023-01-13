import { createStore } from "redux";
import rootcombine from "./reducer/main";

const store = createStore(
    rootcombine, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store;