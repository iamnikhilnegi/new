import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';

function Register():JSX.Element {

    function SubmitForm(event)
    {
        
        
        
        // axios.get("http://localhost:8000").then(()=>{
        //     console.log('ok');
        // })
        axios.post('/register',user)
            .then(function (response:AxiosResponse) {
                //handle success
                console.log("response")
                console.log(response.data);
                console.log(response);
            })
            .catch(function (response) {
                console.log("error")
                console.log(response.data);
                console.log(response);
                //handle error
                console.log(response.body);
            });

        event.preventDefault();
        //console.log(event);
        

    }

    interface _user{
        username:string,
        password:string
    }
    

    const [user,setUser] = useState<_user>({username:"",password:""});
    
    function handleChange(event)
    {
        let targetName=event.target.name;
        let targetValue=event.target.value;
        setUser((prevState):_user=>{
            if(targetName==="username")
            {
                return {username:targetValue,
                    password:prevState.password
                };
            }
            else if(targetName==="pass"){
                return {username:prevState.username,
                    password:targetValue
                };
            }
            else{
                throw Error("undefined");
            }
        })
        //console.log(user);
    }

    return (
        <div className="text-center">
            <div className="logo">Register</div>
            <div className="login-form-1">
                <form id="login-form" className="text-left">
                    <div className="login-form-main-message"></div>
                    <div className="main-login-form">
                        <div className="login-group">
                            <div className="form-group">
                                <label  className="sr-only">Username</label>
                                <input type="text" className="form-control" id="lg_username"name="username" placeholder="username" onChange={handleChange} value={user.username}/>
                            </div>
                            <div className="form-group">
                                <label  className="sr-only">Password</label>
                                <input type="password" className="form-control" id="lg_password" name="pass" placeholder="password" onChange={handleChange} value={user.password}/>
                            </div>
                        </div>
                        <button onClick={SubmitForm} type="button"  className="login-button" >< i className="fa fa-chevron-right"></i></button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Register;
