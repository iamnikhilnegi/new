import React, { useState } from 'react';
import axios from 'axios';

function Login():JSX.Element {

    function SubmitForm(event)
    {
        axios.post('http://localhost:8000/login',user)
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });

        event.preventDefault();
        console.log(event);
    }

    interface _user{
        username:string,
        pass:string
    }
    

    const [user,setUser] = useState<_user>({username:"",pass:""});
    
    function handleChange(event)
    {
        let targetName=event.target.name;
        let targetValue=event.target.value;
        setUser((prevState):_user=>{
            if(targetName==="username")
            {
                return {username:targetValue,
                    pass:prevState.pass
                };
            }
            else if(targetName==="pass"){
                return {username:prevState.username,
                    pass:targetValue
                };
            }
            else{
                throw Error("undefined");
            }
        })
        console.log(user);
    }

    return (
        <div className="text-center">
            <div className="logo">Login</div>
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
                                <input type="password" className="form-control" id="lg_password" name="pass" placeholder="password" onChange={handleChange} value={user.pass}/>
                            </div>
                        </div>
                        <button onClick={SubmitForm} type="button"  className="login-button" >< i className="fa fa-chevron-right"></i></button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Login;
