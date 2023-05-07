import React from "react";
import axios from "../../services/axios";
export default function Login(){
    React.useEffect(()=>{
        async function getData(){
            const response = await axios.get('http://localhost:5000/api/consumer/logout')
            console.log(response)
        }
        getData()
    },[])
    return(
        <div className="mx-auto p-2 w-50 mt-50" >
            <div className="containter  my-5">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Login Form</h5>
                        <form onsubmit="return false;" id="form">
                            <div className="mb-3">
                                <label for="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" autocomplete="off" required/>
                            </div>
                            <div className="mb-3">
                                <label for="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" autocomplete="off" required/>
                            </div>

                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}