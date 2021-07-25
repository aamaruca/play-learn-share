import {useState} from 'react'


export default function Join({handleJoin}) {
  const [formData, setFromData] = useState({
    username: '',
    email:'',
    password: ''
  })
  const { username, email, password } = formData
  
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
      handleJoin(formData)
    }}>
      <h3>Create an Account</h3>
      <label>
        Username: 
        <input
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email: 
        <input
          type='text'
          name='email'
          value={email}
          onChange={handleChange}
        />
      </label>
      <br />
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
      <button>Join!</button>
      <br />
    </form>
  )
}
