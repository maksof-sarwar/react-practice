import axios from 'axios';
var commonHeaders ={
    'Access-Control-Allow-Origin' : '*',
}
const services = {
    get :async (url, headers, params)=>{
        try{
            let response = await axios.get(url,{headers: {...headers, ...commonHeaders}, params: params});
            return Promise.resolve(response)
        } catch(err){
            return Promise.reject(err);
        }
    },
    post : async (url, headers, params, body)=>{
        try{
            let response = await axios.post(url, body,{headers: headers, params: params})
            return Promise.resolve(response)
        } catch(err){
            return Promise.reject(err);
        }
    }

}
export default services;