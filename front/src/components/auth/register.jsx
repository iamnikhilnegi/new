import React,{useState} from 'react';
import axios from 'axios';

function Register() {

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
        <div class="text-center">
            <div class="logo">Register</div>
            <div class="login-form-1">
                <form id="login-form" class="text-left" onSubmit={SubmitForm}>
                    <div class="login-form-main-message"></div>
                    <div class="main-login-form">
                        <div class="login-group">
                            <div class="form-group">
                                <label for="lg_username" class="sr-only">Username</label>
                                <input type="text" class="form-control" id="lg_username" name="lg_username" placeholder="username" />
                            </div>
                            <div class="form-group">
                                <label for="lg_password" class="sr-only">Password</label>
                                <input type="password" class="form-control" id="lg_password" name="lg_password" placeholder="password" />
                            </div>
                            <div class="form-group login-group-checkbox">
                                <input type="checkbox" id="lg_remember" name="lg_remember" />
                                <label for="lg_remember">remember</label>
                            </div>
                        </div>
                        <button type="submit"  class="login-button" ><i class="fa fa-chevron-right"></i></button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Register;
