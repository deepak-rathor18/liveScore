import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { PageNotFound } from '../PageNotFound/PageNotFound';
import { Networkerr } from '../PageNotFound/Networkerr';

export const Country= () => {
  const [match, setMatch] = useState([])
  const [errmsg, setErrmsg] = useState("")
  useEffect(() => {
    let response = axios.get("https://api.cricapi.com/v1/countries?apikey=331bfaa0-0300-461f-a83d-06f6c9b63281&offset=0").then((response) => {
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

                      <th>Flag</th>
                      <th>Country Name</th>
                      <th>Short Name</th>

                    </tr>
                  </thead>
                  <tbody>
                    {match.map((country, index) => (
                      <tr key={index}>
                        <td className='img'>
                          <img
                            src={country.genericFlag}
                            alt={`${country.name} Flag`}

                            style={{ width: "70px" }} />
                        </td>
                        <td >{country.name}</td>
                        <td >{country.id}</td>
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

