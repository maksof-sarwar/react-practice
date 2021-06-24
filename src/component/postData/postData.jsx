import './postData.css'
import React,{useState, useEffect} from 'react'
import componentService from './postData.js';

export default function PostData() {
    const [data, setData] = useState({ })
    const [response, setResponse] = useState('')
    async function sendData(){
        let body = {
            name : data.personName,
            phoneNo : data.phoneNo
        }
        console.log(data)
        let res = await componentService.sendData(body);
        setResponse(res.data.message)
    }
    return (
        <div>
            <div className="field">
                <p className="control has-icons-left has-icons-right">
                    <input className="input" placeholder="name" onChange={e => setData({ ...data ,personName : e.target.value })}/>
                    <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                    <i className="fas fa-check"></i>
                    </span>
                </p>
                </div>
                <div className="field">
                <p className="control has-icons-left">
                    <input className="input"  placeholder="phone" onChange={e => setData({ ...data,phoneNo: e.target.value })}/>
                    <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                    </span>
                </p>
                </div>
                <div className="field">
                <p className="control">
                    <button className="button is-success" onClick={sendData}>
                        save
                    </button>
                </p>
                {(response != '')? <p>{response}</p> : null}
            </div>
        </div>
    )
}
