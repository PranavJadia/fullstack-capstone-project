import React, { useState } from 'react';

import './RegisterPage.css';

function RegisterPage() {

    //insert code here to create useState hook variables for firstName, lastName, email, password

    const [firstName,setFirstName]= useState('');
    const [lastName,setLastName]= useState('');
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    // insert code here to create handleRegister function and include console.log
    const handleRegister = async () =>{
        console.log("register invoked")
    }
         return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <div className="register-card p-4 border rounded">
                            <h2 className="text-center mb-4 font-weight-bold">Register</h2>

                    {/* insert code here to create input elements for all the variables - firstName, lastName, email, password */}
                    <div className='mb-4'>
                        <label htmlFor="firstName" className='form label'>FirstName</label>
                        <input 
                        id="firstName"
                        type="text"
                        className='form-control'
                        placeholder='Enter Your First name'
                        value={firstName}
                        onChange={(e)=>setFirstName(e.target.value)}
                        />
                        <label htmlFor="LastName" className='form label'>LastName</label>
                        <input 
                        id="lastName"
                        type="text"
                        className='form-control'
                        placeholder='Enter Your Last name'
                        value={lastName}
                        onChange={(e)=>setLastName(e.target.value)}
                        />
                        <label htmlFor="Email" className='form label'>Email</label>
                        <input 
                        id="Email"
                        type="text"
                        className='form-control'
                        placeholder='Enter Your email'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                        <label htmlFor="password" className='form label'>password</label>
                        <input 
                        id="password"
                        type="password"
                        className='form-control'
                        placeholder='Enter Your password'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                    {/* insert code here to create a button that performs the `handleRegister` function on click */}
                    <button className="btn btn-primary w-100 mb-3" onClick={handleRegister}>Register</button>
                        <p className="mt-4 text-center">
                            Already a member? <a href="/app/login" className="text-primary">Login</a>
                        </p>

                         </div>
                    </div>
                </div>
            </div>

         )//end of return
}

export default RegisterPage;