const intialdata = {
    products: [],
    singleproduct: {},
}
export const product = (state = intialdata, action) => {
    switch (action.type) {
        case "setproducts": {
            return {
                ...state,
                products: action.payload,
            }
        }
        case "setsingledata": {
            return {
                ...state,
                singleproduct: action.payload,
            }
        }
        default:
            return state;
    }
}