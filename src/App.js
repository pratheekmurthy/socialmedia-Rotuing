import React, { useState,useEffect } from 'react'
import {BrowserRouter,Route,Redirect} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Dashboard from './Dashboard'
import Login from './Login'



const App=(props)=>{
    const [login,setLogin] = useState({})
    
    useEffect(()=>{
        const  result =JSON.parse(localStorage.getItem("user"))
        setLogin(result);

    },[])

   return (<div> 
        <BrowserRouter>
                <Route path="/login"  exact={true} render={()=>(<Login />)} />
                <Route path="/dashboard"  exact={true} render={()=>(<Dashboard  {...login}/>)} />
                {
                    login ? ( <Redirect to='/dashboard'/>) : (<Redirect to='/login'/>)
                }     
        </BrowserRouter>     
    </div>)
}

export default App
