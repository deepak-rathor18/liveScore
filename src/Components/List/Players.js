import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { PageNotFound } from '../PageNotFound/PageNotFound';
import { Networkerr } from '../PageNotFound/Networkerr';

export const Players= () => {
  const [match, setMatch] = useState([])
  const [errmsg, setErrmsg] = useState("")
  useEffect(() => {
    let response = axios.get("https://api.cricapi.com/v1/players?apikey=fa5ef622-c2ce-45a7-a9c8-f5e2c7a6075d&offset=0").then((response) => {
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
      {errmsg != "Network Error" ?
        <div>
          {match ?
            <div class="box-wrap">
              <div class="table-wrap">
                <table>
                  <thead>
                    <tr>

                    
                      <th>Player Name</th>
                      <th>Country Name</th>

                    </tr>
                  </thead>
                  <tbody>
                    {match.map((country, index) => (
                      <tr key={index}>
                       
                        <td >{country.name}</td>
                        <td >{country.country}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>


            </div> : <PageNotFound />}
        </div> : <Networkerr />}
    </>
  )
}

