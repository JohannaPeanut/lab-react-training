import { useState } from 'react';
import profiles from './../data/berlin.json';

const FaceBook = () => {

profiles.forEach((p) => {p.id = Math.random()})

    const [filterCountry, setFilterCountry] = useState(null)

    const countries = []
    for(let i of profiles){
        if(!countries.includes(i.country)) countries.push(i.country)
    }

    const handleCountryChange = (country) => {
        setFilterCountry(country)
    }

    const same = (c) => {return c === filterCountry}

  return (
    <div>
        <h1>Facebook</h1>

        {countries.map((element) => {
            return(
                <button onClick={() => handleCountryChange(element)} key={element}>{element}</button>
            )
        })}
       
        {profiles.map((person)=>{
            return(
                <div key={person.id}>
                    <div className="profile" style={{'backgroundColor': same(person.country) ?  'blue' : 'white' }}>
                    {same(person.country) ? <p>same</p> : <p>not same</p>}
                        <img className="profilepic" src={person.img} alt='profile' />
                        <article>
                        <p><b>First Name: </b>{person.firstName}</p>
                        <p><b>Last Name: </b>{person.lastName}</p>
                        <p><b>Country: </b>{person.country}</p>
                        {person.isStudent ? <p><b>Type: </b>Student</p> : <p><b>Type: </b>Teacher</p>}
                        </article>
                    </div>
                    
                </div>
            )
        })}
    
    </div>
  )
}

export default FaceBook