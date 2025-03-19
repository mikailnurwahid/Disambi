import {getData} from "../lib/asynstorage"


const bashUrl=""
export const create =  async (path,data)=>{
    const token = await getData('token')
    
    try {
        let response = await fetch(bashUrl+path,{
            method: "",
            body:JSON.stringify(data),
            headers:{
                'Content-type' : 'application/json',
                'Authorization' : token && `Bearer ${token}`
            }
        })

        let res = await response.json()
        return res
        
    } catch (error) {
        console.log(error);
        
    }
}