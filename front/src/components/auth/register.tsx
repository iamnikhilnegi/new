import React from 'react';
import axios from 'axios';

function Register():JSX.Element {

    // const [username,setUsername] = useState("");
    // const [password,setPassword] = useState("");


    function SubmitForm(event)
    {
        let registrationData= new FormData();
        
        registrationData.set('userName',event.target[0].value);
        registrationData.set('password',event.target[1].value);
        
        // axios.get("http://localhost:8000").then(()=>{
        //     console.log('ok');
        // })
        axios({
            method: 'post',
            url: 'http://localhost:8000/register',
            data: registrationData,
            headers: {'Content-Type': 'multipart/form-data' }
            })
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




    return (
        <div className="text-center">
            <div className="logo">Register</div>
            <div className="login-form-1">
                <form id="login-form" className="text-left" onSubmit={SubmitForm}>
                    <div className="login-form-main-message"></div>
                    <div className="main-login-form">
                        <div className="login-group">
                            <div className="form-group">
                                <label  className="sr-only">Username</label>
                                <input type="text" className="form-control" id="lg_username" name="lg_username" placeholder="username" />
                            </div>
                            <div className="form-group">
                                <label  className="sr-only">Password</label>
                                <input type="password" className="form-control" id="lg_password" name="lg_password" placeholder="password" />
                            </div>
                            <div className="form-group login-group-checkbox">
                                <input type="checkbox" id="lg_remember" name="lg_remember" />
                                <label>remember</label>
                            </div>
                        </div>
                        <button type="submit"  className="login-button" ><i className="fa fa-chevron-right"></i></button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Register;
