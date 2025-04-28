import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserSignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userData, setUSerData] = useState({});


    const submitHandler = (e) => {
        e.preventDefault()
        setUSerData({
            fullName: {
                firstName: firstName,
                lastName: lastName
            },
            password: password,
            email: email
        })
        console.log(userData);

        setEmail('')
        setFirstName('')
        setLastName('')
        setPassword('')

    }
    return (
        
            <div className='p-7 h-screen flex flex-col justify-between'>
                <div>
                 <img className='w-16 mb-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
    
                <form  onSubmit= {(e) => {
                    submitHandler(e);
                }}>
                    <h3 className='text-base font-medium mb-2'>What's your Name</h3>
                    <div className='flex gap-4 mb-5'>
                    <input 
                    value={firstName}
                    onChange = {(e) => {
                    setFirstName(e.target.value)
                 }}
                        
                    required
                     className='bg-[#eeeeee]  w-1/2 rounded px-4 py-2   text-bse placeholder:text-sm'
                     type="text"
                      placeholder='First Name' />

                    <input
                    value={lastName}
                    onChange = {(e) => {
                    setLastName(e.target.value)
                   }}
                     
                    required
                     className='bg-[#eeeeee]  w-1/2 rounded px-4 py-2   text-base placeholder:text-sm'
                     type="text"
                      placeholder='Last Name' />

                    </div>
                    <h3 className='text-base font-medium mb-2'>What's your email</h3>
    
                    <input 
                    required
                    value={email}
                    onChange = {(e) => {
                    setEmail(e.target.value)
                    }}
                     className='bg-[#eeeeee] mb-6 rounded px-4 py-2  w-full text-lg placeholder:text-base'
                     type="email"
                      placeholder='email@example.com' />
                    
                    <h3 className='text-base font-medium mb-6'>Enter Password</h3>
                    
                    <input
                    value={password}
                    onChange = {(e) => {
                    setPassword(e.target.value)
                    }}
                     className='bg-[#eeeeee] mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base'
                    required
                    
                    type="Password"
                    placeholder='password' />
                    
                    <button  className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base'
                    >Login</button>
                </form>
                <p className='text-center'>Already have a account? <Link to='/login' className='text-blue-600'>Login Here</Link></p>
                </div>
                <div>
                    <p className="text-xs"> By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automnated means, from Uber and its afilliates to the number provided.</p>
                </div>
            
    
            </div>
        )
}

export default UserSignUp;