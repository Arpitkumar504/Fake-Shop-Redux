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