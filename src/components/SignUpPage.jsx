import {useState} from 'react'

const SignUpPage = () => {

    const [ email, setEmail] = useState('')
    const [ password, setPassword ] = useState('')
    const [ nationality, setNationality] = useState('')

    const handleSubmission = (event) => {
        event.preventDefault()
        const newMember = { email, password, nationality }
        console.log(newMember)
        setEmail('')
        setNationality('')
        setPassword('')
    }

    const handleEmailChange = (event) => { const value = event.target.value;
        setEmail(value)
        console.log(value)}
    const handlePasswordChange = (event) => { const value = event.target.value;
        setPassword(value)
        console.log(value)}
    const handleLanguageChange = (event) => { const value = event.target.value;
        setNationality(value)
        console.log(value)}

  return (
    <div>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmission}>
  <div className="form-group">
    <label htmlFor="email">Email address</label>
    <input onChange ={handleEmailChange} value={email} type="email" className="form-control" id="email" placeholder="name@example.com"/>
    <label htmlFor="pw">Password</label>
    <input onChange ={handlePasswordChange} value={password} type="password" className="form-control" id="pw" placeholder="*****"/>
  </div>
  <div className="form-group">
    <label htmlFor="language">Language</label>
    <select onChange ={handleLanguageChange} value={nationality} className="form-control" id="language">
      <option>en</option>
      <option>es</option>
      <option>de</option>
    </select>
  </div>
  {nationality === 'en' ? <p>Hello</p> : ''}
  {nationality === 'es' ? <p>Hola</p> : ''}
  {nationality === 'de' ? <p>Hallo</p> : ''}

  <p>Your email is {email}</p>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default SignUpPage