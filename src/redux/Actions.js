export function Increment(){
    return{
        type:"INCREMENT_VALUE"
    }
} 
export function Decrement(){
    return{
        type:"DECREMENT_VALUE"
    }
} 
export function IncrementByPayload(value){
    return{
        type:"INCREMENT_PAYLOAD",
        payload: value
    }
} 