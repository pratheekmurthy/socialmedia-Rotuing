import React,{useState,useEffect} from 'react'
import { useHistory } from "react-router-dom"
import axios from 'axios'
import Post from './Post'


const Dashboard =(props)=>{
    const [user,setuser] = useState({})
    const [posts,setposts] = useState([])
    const [userposts,setuserposts]= useState([])
    
    useEffect(()=>{
        const result =JSON.parse(localStorage.getItem("user"))
        setuser(result);

    },[])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response)=>{
                const result = response.data;
                setposts(result);
                
            })
            .catch((err)=>{
                alert ( err.message)
            })
            
    },[])

    useEffect(()=>{
        const value = posts.filter((ele)=>{
            return ele.userId == user.id
        })
       setuserposts(value);

    },[posts])

    const handleChange =(e)=>{
        localStorage.clear()
        window.location.reload()
        
    }

    return (<div>
        <button onClick={handleChange}>Logout</button>
        
        {user && <div>
           
           <h2>Name - {user.name}</h2>
           <p>Email - {user.email}</p>
           <p>Company - {user.companyname}</p>
   
           <h2>Posts - {userposts.length}</h2>
                  
           </div>}
        <div>
           
      
               
        </div>
        {
            userposts.map((ele)=>{
                return (
                
                <Post post={ele} />
                
                )
            })
        }
    </div>)
}

export default Dashboard
