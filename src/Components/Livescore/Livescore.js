import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Cardlivescore } from './Cardlivescore'
import { PageNotFound } from '../PageNotFound/PageNotFound'
import { Networkerr } from '../PageNotFound/Networkerr'
// import { PageNotenetwork } from '../PageNotFound/PageNotenetwork'
export const  Livescore= (props) => {

    const [state,setState] = useState([])
    const [errmsg,setErrmsg]= useState("")
    useEffect(() => {
     let response= axios.get("https://api.cricapi.com/v1/cricScore?apikey=33f1c3bd-4888-43a0-b93e-7cd1d4c8d466").then((response) => {
        // console.log(response.data.data)
        setState(response.data.data)
      }).catch((err => {
        setErrmsg(err.message)
        // console.log(err.message);
        // console.log(err)
       
      }))
    }, [])
  return (
    <>
    
    { errmsg != "Network Error" ?
        <div>
   { state ?
     <div className='container'>   
    {
 state.map((value,index,array)=>{
        return(
              <Cardlivescore match={value}/>
              )
            })
         }
          
    </div>: <PageNotFound/>}
  
  </div> :<Networkerr/> }
  </>
 
       )
     }