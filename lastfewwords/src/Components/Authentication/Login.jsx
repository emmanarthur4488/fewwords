import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './login.css'
import Icon from '../../assets/icon.svg'

const Login = () => {
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
            navigate('/loader')
        }, 1000);
           
    }

  return (
    <div>
      <div className="login-container">
            <div className="login-box">
                <div className="lock-icon">
                    <img src={Icon} alt="Lock Icon" />
                </div>
                <h2 className="form-header">LAST FEW WORDS</h2>
                <p>Login to access your Dashboard</p>
                <form onSubmit={submitHandler}>
                    <div className="input-group">
                        <label htmlFor="name">Name:</label><br/>
                        <input className="input" type="text"  placeholder="Name" name="name"  onChange={handleChange}/><br/>
                    </div>
                    
                    <div className="input-group">
                        <label htmlFor="email">Email:</label><br/>
                        <input className="input" type="text" required placeholder="Contact email" name="email" onChange={handleChange}/><br/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password:</label><br/>
                        <input className="input" type="password" required placeholder="Password" name="password" onChange={handleChange}/><br/>
                    </div>

                    <button
                    className={formValid?"auth_signup-active":"auth_signup-submit"}
                        > <i className="fa fa-spinner fa-spin"></i>Login
                    </button>
                    <p className="signin-link">
                        Don't have an account?
                        <Link to='/signup' style={{ marginLeft: '5px' }}>Register</Link>
                    </p>
                </form>
                
            </div>
        </div>
    </div>
  )
}

export default Login
