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

const filterdata = {
    alldata: [],
    filterproduct: [],
    gridview: true,
    sortingvalue: "lowest",
    ratingdata: 5,
    filter: {
        name: "",
        category: "all",
        min: 0,
        max: 0,
        price: 0,
    },
}
export const filterproduct = (state = filterdata, action) => {
    switch (action.type) {
        case "setfilter": {
            let priceall = action.payload.map(element => {
                return element.price;
            })
            let maximumprice = Math.max.apply(null, priceall);
            return {
                ...state,
                alldata: [...action.payload],
                filterproduct: [...action.payload],
                filter: {
                    ...state.filter,
                    max: maximumprice,
                    price: maximumprice,
                },
            }
        }
        case "setsorting": {
            return {
                ...state,
                sortingvalue: action.payload,
            }
        }
        case "sortproduct": {
            let newdata;
            let temp = [...state.filterproduct];
            if (state.sortingvalue === "a-z") {
                newdata = temp.sort((a, b) =>
                    a.title.localeCompare(b.name)
                );
            }
            if (state.sortingvalue === "z-a") {
                newdata = temp.sort((a, b) =>
                    b.title.localeCompare(a.name)
                );
            }
            if (state.sortingvalue === "lowest") {
                newdata = temp.sort((a, b) =>
                    a.price - b.price
                );
            }
            if (state.sortingvalue === "highest") {
                newdata = temp.sort((a, b) =>
                    b.price - a.price
                );
            }
            if (state.sortingvalue === 'ratinglow') {
                newdata = temp.sort((a, b) =>
                    a.rating.rate - b.rating.rate
                );
            }
            if (state.sortingvalue === 'ratinghigh') {
                newdata = temp.sort((a, b) =>
                    b.rating.rate - a.rating.rate
                );
            }
            return {
                ...state,
                filterproduct: newdata,
            }
        }
        case "grid": {
            return {
                ...state,
                gridview: true,
            }
        }
        case "list": {
            return {
                ...state,
                gridview: false,
            }
        }
        case "setvalue": {
            const { names, values } = action.payload;
            return {
                ...state,
                filter: {
                    ...state.filter,
                    [names]: [values],
                }
            }
        }
        case "filterproduct": {
            let data = [...state.alldata];
            const { ratingdata } = state;
            const { name, category, price } = state.filter;
            if (name) {
                data = data.filter(element => {
                    return element.title.toLowerCase().includes(name);
                })
            }
            if (category != "all") {
                data = data.filter(element => {
                    return element.category == category;
                })
            }
            if (ratingdata) {
                data = data.filter(element => {
                    return element.rating.rate <= ratingdata;
                })
            }
            if (price == 0) {
                data = data.filter(element => {
                    return element.price == price;
                })
            }
            else {
                data = data.filter(element => {
                    return element.price <= price;
                })
            }
            return {
                ...state,
                filterproduct: data,
            }
        }
        case "setrating": {
            return {
                ...state,
                ratingdata: action.payload,
            }
        }
        case "clear": {
            return {
                ...state,
                ratingdata: 5,
                filter: {
                    ...state.filter,
                    name: "",
                    category: "all",
                    min: state.filter.min,
                    max: state.filter.max,
                    price: state.filter.max,
                },
            }
        }
        default:
            return state;
    }
}

const carts = {
    cart: [],
    shippingfee: 100,
    totalitem: 0,
    totalprice: 0,
}
export const productcart = (state = carts, action) => {
    switch (action.type) {
        case "addtocart": {
            let { data, id } = action.payload;
            let existingitem = state.cart.find(element => {
                return element.data.id == id;
            })
            if (existingitem) {
                const existing = state.cart.map(element => {
                    if (element.data.id == id) {
                        return {
                            ...element,
                            quantity: element.quantity + 1,
                        }
                    }
                    else {
                        return element;
                    }
                })
                return {
                    ...state,
                    cart: existing,
                }
            }
            else {
                return {
                    ...state,
                    cart: [...state.cart, { data, quantity: 1 }],
                }
            }
        }
        case "removecart": {
            const data = state.cart.filter(element => {
                return element.data.id != action.payload;
            })
            return {
                ...state,
                cart: data,
            }
        }
        case "increasequantity": {
            const data = state.cart.map(element => {
                if (element.data.id == action.payload) {
                    return {
                        ...element,
                        quantity: element.quantity + 1,
                    }
                }
                else {
                    return element;
                }
            })
            return {
                ...state,
                cart: data,
            }
        }
        case "decreasequantity": {
            const data = state.cart.map(element => {
                if (element.data.id == action.payload) {
                    let amount = element.quantity - 1;
                    if (amount <= 0) {
                        amount = 1;
                    }
                    return {
                        ...element,
                        quantity: amount,
                    }
                }
                else {
                    return element;
                }
            })
            return {
                ...state,
                cart: data,
            }
        }
        case "clearcart": {
            return {
                ...state,
                cart: [],
            }
        }
        case "totalitem": {
            const data = state.cart.reduce((initialvalue, element) => {
                const { quantity } = element;
                initialvalue = initialvalue + quantity;
                return initialvalue;
            }, 0)
            return {
                ...state,
                totalitem: data,
            }
        }
        case "totalprice": {
            const data = state.cart.reduce((initialvalue, element) => {
                const { data: { price }, quantity } = element;
                initialvalue = initialvalue + (price * quantity);
                return initialvalue;
            }, 0)
            return {
                ...state,
                totalprice: data,
            }
        }
        default:
            return state;
    }
}