import './hellowrold.css';
import React, {useEffect, useState}from 'react'
import Api from './helloworld.js';
export default function Helloworld() {
    const [get, setGet] = useState([]);
    useEffect(()=>{
        async function fetchData(){
            let res = await getPersonData();
            let r = res.data.data;
            let data = r.map(i => <tr key={i._id}><td>{i.name}</td><td>{i.phoneNo}</td></tr>)
            setGet(data)
        }
        fetchData();
    },[])
    
    return (
           <div>
            <table>
                 <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody className='table'>
                    {get}
                </tbody>
            </table>
        </div>    
    )
     
    
    
}

async function getPersonData (){
    let res = await Api.getPersonDetail()
    return res;
}


