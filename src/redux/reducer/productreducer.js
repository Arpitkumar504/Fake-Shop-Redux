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
    filter: {
        name: "",
        category: "all",
    },
}
export const filterproduct = (state = filterdata, action) => {
    switch (action.type) {
        case "setfilter": {
            return {
                ...state,
                alldata: [...action.payload],
                filterproduct: [...action.payload],
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
            const { name, category } = state.filter;
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
            return {
                ...state,
                filterproduct: data,
            }
        }
        default:
            return state;
    }
}