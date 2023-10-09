import React from 'react'
import { PageNotFound } from '../PageNotFound/PageNotFound'


export const Currentmcard = (props) => {
    console.log(props)
    const { match } = props
    return (
        <>
        {match ?  <div>
      <div className='card'>
            <div className='header flex'>
                <div>{match.name}</div>
                <div>{match.date}</div>
            </div>
            <div style={{ fontSize: "11px", marginTop: "20px", display: "flex", gap: "80px" }}>
                <div>{match.dateTimeGMT}</div>
                <div>{match.matchType}</div>
            </div>
            <div>
                {
                    match.teamInfo.map((team, index) => {
                        return (
                            <div className='team flex'>
                                <div><img style={{ width: "20px" }} src={team.img} />{team.shortname ? team.shortname : "NA"}</div>
                                <div>
                                {
                                  
                                        match.score[index] 
                                          ?match.score[index].inning.includes(team.name)  ? `${match.score[index].r}/${match.score[index].w} (${match.score[index].o})`:
                                          
                                          `${match.score[index==0?1:0 ]?match.score[index==0?1:0 ].r:""}/${match.score[index==0?1:0 ]?match.score[index==0?1:0].w:"--"} (${match.score[index==0?1:0 ]?match.score[index==0?1:0].o:"0"})`
                                    
                                    : '--(0)'
                                }
                              </div>
                              
                                </div>
                                )
                            })
                            // <div> {match.score[index] ? match.score[index].inning : 'na'}</div>
                            // <div>{match.score[index] ? <div>{match.score[index].inning.includes(team.name) ? match.score[index].r + '/' + match.score[index].w +  '(' + match.score[index].o + ')' : '--(0)' }</div>:'na'}   </div>
                            
                        }

            </div>

            <div style={{ fontSize: "11px", marginTop: "20px", }} className='flex'>
                <div>{match.status}</div>


                </div>
                </div>
                </div>:<PageNotFound/>}
        </>
    )
}
