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
            return {
                ...state,
                filterproduct: newdata,
            }
        }
        default:
            return state;
    }
}