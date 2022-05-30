export function Increment() {
    return {
        type: "INCREMENT_VALUE"
    }
}
export function Decrement() {
    return {
        type: "DECREMENT_VALUE"
    }
}
export function IncrementByPayload(value) {
    return {
        type: "INCREMENT_PAYLOAD",
        payload: value
    }
}
export function SetInput(value) {
    return {
        type: "SET_INPUT",
        payload: value
    }

}
export function IncrementByButton(value) {
    return {
        type: "INCREMENT_BY_BUTTON",
        payload: value
    }
}
// export function getCountries(countries) {
//     return {
//         type: "GET_COUNTRIES",
//         payload:  countries,

//     }
// }
// export function fetchCountries() {

//     return (dispatch) => {
//         fetch("https://restcountries.com/v3.1/all")
//             .then((response) => response.json())
//             .then((data) => dispatch(getCountries(data)));
//     }
// } 

export const fetchCountries = () => (dispatch) => {
    fetch("https://restcountries.com/v3.1/all")
        .then((response) => response.json())
        .then((data) => dispatch({
            type: "GET_COUNTRIES",
            payload: data
        }))
};

export function addTocart(country){
    // console.log("Hi there",country);
    return{
        type:"ADD_TO_CART",
        payload:{
            country
        }
    }
}