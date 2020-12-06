import React,{useState,useEffect} from 'react'
import { useHistory } from "react-router-dom"
import axios from 'axios'



const Login =(props)=>{
    const [email,setEmail] = useState("")
    const [users,setUsers] = useState([])

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

    const handleEmail =(e)=>{
        const result =e.target.value;
        setEmail(result);
        
    }
    

    
    const handleSubmit =(e)=>{

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

            
           
            const user = {"login" : true, "id" : valid, "email" : email, "name": name, "companyname" :company, }
            localStorage.setItem("user", JSON.stringify(user))
            
           
        }

        

        // if(){
        //     
        // }

        setEmail("")
    }

    

    return (<div>
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
        <input type="email" placeholder="enter your email address" onChange={handleEmail}/><br/>
        <input type="submit" value="LogIN"/>
        </form>
        </div>
    )

}

export default Login