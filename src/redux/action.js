import { GET_DATA } from "./actionTypes";



const getData =(data)=>{
    return{
    type:GET_DATA,
    payload:data
    }
}


export {getData}