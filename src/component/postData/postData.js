import services from '../../services/api-services';
const apiService = {
    sendData : async function(body){
        let res = await services.post('http://localhost:3000/api/person/insert',{'sarwar':'sadasdasd'},{'ij':'asdas'},body);
        return Promise.resolve(res);
    }  
}

export default apiService;
