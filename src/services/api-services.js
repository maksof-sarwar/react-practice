import axios from 'axios';
var commonHeaders ={
    'api-key':'123',
    'Access-Control-Allow-Origin' : '*',
}
const services = {
    get :async (url, headers, params)=>{
        try{
            let config= {
                headers:{...headers, ...commonHeaders},
                params: params
            }
            let response = await axios.get(url,config);
            return Promise.resolve(response)
        } catch(err){
            return Promise.reject(err);
        }
    },
    post : async (url, headers, params, body)=>{
        try{
            let config= {
                headers:{...headers, ...commonHeaders},
                params: params
            }
            let response = await axios.post(url, body,config)
            return Promise.resolve(response)
        } catch(err){
            return Promise.reject(err);
        }
    }
}
export default services;