const initialState = {
    countries: [],
    cart:[]
};
export default function countryReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_COUNTRIES": {
            return {
                ...state,
                countries: action.payload,
            };
        }
        case "ADD_TO_CART": {
            const {country}=action.payload
            //  console.log("Hi",country);
            return {
              ...state,  
              cart:[...state.cart,country]
              
            };
            
        }
        default:
            return state;
    }
}