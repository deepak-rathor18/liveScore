import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { PageNotFound } from '../PageNotFound/PageNotFound';
import { Networkerr } from '../PageNotFound/Networkerr';
import { Container } from '@mui/material';

export const Matches= () => {

    const[match,setMatch]=useState([])
    const [errmsg,setErrmsg]= useState("")
    useEffect(() => {
     let response= axios.get("https://api.cricapi.com/v1/matches?apikey=fa5ef622-c2ce-45a7-a9c8-f5e2c7a6075d&offset=0").then((response) => {
        // console.log(response.data.data)
        setMatch(response.data.data)
      }).catch((err => {
        setErrmsg(err.message)
        // console.log(err.message);
        // console.log(err)
       
      }))
    }, [])
 
  return (
    <>
 <Container maxWidth='lg,sm,md,xs' fixed>
 { errmsg != "Network Error" ?
 <div>
   { match ?
      <div className="box-wrap1" >
         <table style={{marginBottom:'80px'}}>
     <thead>
       <tr>
         <th>Name</th>
         <th>MatchType</th>
         <th>Status</th>
         <th>Venue</th>
         <th>Date</th>
         <th>DateTimeGMT</th>
       </tr>
     </thead>
     <tbody>
       {match.map((match, index) => (
         <tr key={index}>
           <td>{match.name}</td>
           <td>{match.matchType}</td>
           <td>{match.status}</td>
           <td>{match.venue}</td>
           <td>{match.date}</td>
           <td>{match.dateTimeGMT}</td>
         </tr>
       ))}
     </tbody>
   </table >
 </div>:<PageNotFound/>}
 </div> :<Networkerr/> }
 </Container>
    </>
  )
}

