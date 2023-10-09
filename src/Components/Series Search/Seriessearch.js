import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Seriescard } from './Seriescard'
import { PageNotFound } from '../PageNotFound/PageNotFound'
import { Networkerr } from '../PageNotFound/Networkerr'
export const  Seriessearch= (props) => {

    const [state,setState] = useState([])
    const [errmsg,setErrmsg]= useState("")
    useEffect(() => {
     let response= axios.get("https://api.cricapi.com/v1/series?apikey=3390f7f7-a785-43b7-9ce7-4b5707c72aaf&offset=0&search=").then((response) => {
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

   {state?
     <div className='container'>   
    {
 state.map((value,index,array)=>{
        return(
              <Seriescard series={value}/>
              )
            })
         }
          
    </div>: <PageNotFound/>}
  </div> :<Networkerr/> }
  </>
       )
     }