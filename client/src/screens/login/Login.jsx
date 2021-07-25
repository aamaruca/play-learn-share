import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login({handleLogin}) {
  const [formData, setFromData] = useState({
    username: '',
    password: ''
  })
  const {username, password} = formData

  const handleChange = (e) => {
    const { name, value } = e.target
    setFromData(prevState => ({
      ...prevState,
        [name]:value
    }))
}


  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      handleLogin(formData)
    }}>
      <h3>Login</h3>
      <label>
        Username: 
        <input
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
        />
      </label>
      <br/>
      <label>
        Password: 
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button>Submit</button>
      <br />
      <br />
      <Link to='/join'><button>Create an Account</button></Link>
    </form>
  )
}
