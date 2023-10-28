import React, { useState } from 'react'
const ChangePassword = () => {
    const [password,setPassword] = useState('')
    const [verifyPassword,setVerifyPassword] = useState('')
    const handlePassword = (event) => {
        setPassword(event.target.value)

    }
    const handleVerifyPassword = (event) => {
        setVerifyPassword(event.target.value)
    }
    const handleSubmit= () => {
        if(password != verifyPassword){
            window.alert('password does not match ')
        }
        else {
            /*call api */
        }
    }
    return (
        <>
            <div>

                <form className='container resetPassword' onSubmit={handleSubmit}>
               <h1> Reset Your Password</h1>
                    <div className="form-group form-outline w-25">
                        <label for="exampleInputEmail1">Choose your Password</label>
                        <input type="password" value={password} onChange={handlePassword} className="form-control" id="exampleInputpassword" aria-describedby="emailHelp" placeholder="Enter Your password" />
                        <small id="password" className="form-text text-muted">Please enter  your password containing special character,numbers,uppercase and lowercase.</small>
                    </div>
                    <div className="form-group my-3 form-outline w-25">
                        <label for="exampleInputVerifyPassword">Verify Your Password</label>
                        <input type="password" value={verifyPassword} onChange={handleVerifyPassword} className="form-control" id="exampleInputPassword1" placeholder="Verify Your Password" />
                    </div>

                    <button type="submit" className="btn btn-primary my-4">Submit</button>
                </form>
            </div>
        </>
    )
}

export default ChangePassword