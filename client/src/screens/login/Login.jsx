import { useState } from 'react'
import "./Login.css"

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
      [name]: value
    }))
  }


  return (
    <form className="form"
      onSubmit={(e) => {
      e.preventDefault()
      handleLogin(formData)
    }}>
      <h3 className="title">Login</h3>
      <label>
        <input
          className="input"
          type='text'
          name='username'
          value={username}
          placeholder="Enter Username"
          onChange={handleChange}
        />
      </label>
      <br/>
      <label>
        <input
          className="input"
          type='password'
          name='password'
          value={password}
          placeholder="Enter Password"
          onChange={handleChange}
        />
      </label>
      <br />
      <button className="submit-btn">Submit</button>
      <br />
    </form>
  )
}
