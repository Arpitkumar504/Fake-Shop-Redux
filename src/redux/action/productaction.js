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

export const updatevalue = (e) => {
    const { name, value } = e;
    return {
        type: "setvalue",
        payload: {
            names: name,
            values: value,
        }
    }
}

export const filterdatas = () => {
    return {
        type: "filterproduct",
    }
}

export const rating = (value) => {
    return {
        type: "setrating",
        payload: value,
    }
}

export const clearfilter = () => {
    return {
        type: "clear",
    }
}

export const addcart = (data, id) => {
    return {
        type: "addtocart",
        payload: {
            data, id,
        }
    }
}

export const remove = (id) => {
    return {
        type: "removecart",
        payload: id,
    }
}

export const increase = (id) => {
    return {
        type: "increasequantity",
        payload: id,
    }
}

export const decrease = (id) => {
    return {
        type: "decreasequantity",
        payload: id,
    }
}

export const clear = () => {
    return {
        type: "clearcart"
    }
}

export const totalitems = () => {
    return {
        type: "totalitem"
    }
}

export const totalprices = () => {
    return {
        type: "totalprice"
    }
}