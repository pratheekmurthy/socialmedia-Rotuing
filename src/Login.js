import React,{useState,useEffect} from 'react'
import { useHistory } from "react-router-dom"
import axios from 'axios'
import validator from 'validator'


const Login =(props)=>{
    const [email,setEmail] = useState("")
    const [users,setUsers] = useState([])
    const [formErrors,setFormErrors] =useState({})
    const errors ={}

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response)=>{
                const result = response.data;
                setUsers(result)
            })
            .catch((err)=>{
                alert ( err.message)
            })

    },[])

    const runValidations =() =>{
        if(email.trim().length === 0) {
            errors.email = 'email cannot be blank'
        } else if(!validator.isEmail(email)) {
            errors.email = 'invalid email format'
        }
    }

    const handleEmail =(e)=>{
        const result =e.target.value;
        setEmail(result);
        
    }
    
    const handleSubmit =(e)=>{
        runValidations()

        if(Object.keys(errors).length === 0) {
            setFormErrors({})
        }else {
                console.log('form errors', errors)
                setFormErrors(errors)
                }
        
        const result = users.find((ele)=>{
            return ele.email == email;
        })

        if(result){
            const result1 = users.filter((ele)=>{
                return ele.email == email;
            })
            const valid = result1[0].id
            const name = result.name
            const company = result.company.name
            const catchPhrase = result.company.catchPhrase
            const user = {"login" : true, "id" : valid, "email" : email, "name": name, "companyname" :company, "catchPhrase" :catchPhrase }
            localStorage.setItem("user", JSON.stringify(user))
        }

        setEmail("")
    }

    return (<div>
       
        

        <div class="card" >
  <div class="card-body">
    <h2 class="card-title">Login</h2>
    <form onSubmit={handleSubmit}>
        <div><label>Enter your email : </label> <input type="email" placeholder="example@abc.com" onChange={handleEmail}/>{formErrors.email && <span> { formErrors.email } </span>}<br/><br/></div>
        <input type="submit" value="LogIN" class="btn btn-primary"/>
        </form>
    
  </div>
</div>
        </div>
    )
}


export default Login