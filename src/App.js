import React, { useState,useEffect } from 'react'
import {Link, BrowserRouter,Route,Redirect,Switch,useHistory} from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'


const App=(props)=>{

    const [login,setLogin] = useState({})

    
    useEffect(()=>{
        const  result =JSON.parse(localStorage.getItem("user"))
        setLogin(result);

    },[])

    
    
    // localStorage.clear();


    return (<div> 
        <BrowserRouter>
                <Route path="/login"  exact={true} render={()=>(<Login />)} />
                <Route path="/dashboard"  exact={true} render={()=>(<Dashboard />)} />

                {
                    login ? ( <Redirect to='/dashboard'/>) : (<Redirect to='/login'/>)
                }     

        </BrowserRouter>
      
        
    </div>)
}

export default App
