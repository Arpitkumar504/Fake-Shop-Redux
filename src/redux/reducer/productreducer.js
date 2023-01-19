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