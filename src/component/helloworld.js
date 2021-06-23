import services from '../services/api-services';
const exportedObject = {
    getPersonDetail : async ()=>{
        let res = await services.get(`http://localhost:3000/api/person/detail`,{'name':'sarwar'});
        return Promise.resolve(res)
    }
}
export default exportedObject;