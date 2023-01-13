const intialdata = {
    products: [],
}
export const product = (state = intialdata, action) => {
    switch (action.type) {
        case "setproducts": {
            return {
                ...state,
                products: action.payload,
            }
        }
        default:
            return state;
    }
}