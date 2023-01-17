export const setproduct = (data) => {
    return {
        type: "setproducts",
        payload: data,
    }
}

export const setsingledata = (singledata) => {
    return {
        type: "setsingledata",
        payload: singledata,
    }
}

export const setfilterproducts = (data) => {
    return {
        type: "setfilter",
        payload: data,
    }
}

export const sorting = (value) => {
    return {
        type: "setsorting",
        payload: value,
    }
}

export const sortdata = () => {
    return {
        type: "sortproduct"
    }
}

export const gridview = () => {
    return {
        type: "grid"
    }
}

export const listview = () => {
    return {
        type: "list"
    }
}