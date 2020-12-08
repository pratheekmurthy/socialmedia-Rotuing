import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Post from './Post'


const Dashboard =(props)=>{
    const { login,id,email,name,companyname,catchPhrase } = props;
    const [user,setuser] = useState({})
    const [posts,setposts] = useState([])
    const [userposts,setuserposts]= useState([])
    

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
            return ele.userId == id
        })
       setuserposts(value);

    },[posts])

    const handleChange =(e)=>{
        localStorage.clear()
        window.location.reload()  
    }

    return (<div class ="container">
        <div class="row">
            <div class="col-sm">
        <button onClick={handleChange} class="btn btn-danger">Logout</button></div> </div><br/>
        {user && <div>
        <div class="card" >
        <div class="card-header">
        Name - {name}
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Email - {email}</li>
            <li class="list-group-item">Company Name - {companyname}</li>
            <li class="list-group-item">Catchy Phrase -{catchPhrase}</li>
        </ul>
        </div>
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
    </div>
)
}

export default Dashboard
