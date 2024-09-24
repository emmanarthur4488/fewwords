import React, {useState, useEffect} from 'react'
import './signup.css'
import {Link, useNavigate} from "react-router-dom"

const Signup = () => {

  const navigate = useNavigate()
  const [formValid, setFormValid] = useState(false)
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    Password: ""
  });

  useEffect(()=>{
    if (
     form.name !== "" &&
     form.surname !== "" &&
     form.email !== "" &&
     form.password !== "" &&
     form.Password !== ""
    ){
        setFormValid(true)
    } else {
        setFormValid(false)
    }
 }, [form.name,
     form.surname,
     form.email,
     form.password,
     form.Password])
 
    const handleChange = (e) =>{
     setForm({
         ...form,
         [e.target.name] : e.target.value
     })
    }

    const submitHandler = (e) =>{
     e.preventDefault()
     sessionStorage.setItem('userDetails', JSON.stringify({...form}))

     // toast.success(`welcome to GramDech ${form.name}`)

     setTimeout(()=>{
         navigate('/dashboard')
     }, 1000);
    }

  return (
    <div>
        <div className="signup-container">
            <div className="signup-box">
                <div className="lock-icon">
                    {/* <img src={Icon} alt="Lock Icon" /> */}
                </div>
                <h2 className="form-header">LAST FEW WORDS</h2>
                <p>Get Started With us sign up</p>
                <form onSubmit={submitHandler}>
                    <div className="input-group">
                        <label htmlFor="name">Name:</label><br/>
                        <input className="input" type="text"  placeholder="Name" name="name"  onChange={handleChange}/><br/>
                    </div>
                    <div className="input-group">
                        <label>Email *</label>
                        <input type="email" placeholder="Enter your email" onChange={handleChange}/>
                    </div>
                    <div className="input-group">
                        <label>Password *</label>
                        <input type="password" placeholder="Enter your password" onChange={handleChange}/>
                    </div>
                    <div className="input-group">
                        <label>Confirm Password *</label>
                        <input type="password" placeholder="Confirm your password" onChange={handleChange}/>
                    </div>
                    <button
                    className={formValid?"auth_signup-active":"auth_signup-submit"}
                        > Login
                    </button>
                    <p className="signin-link">
                        Already have an account?
                        <Link to='/' style={{marginLeft:'5px'}}>Sign In</Link>
                    </p>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup
