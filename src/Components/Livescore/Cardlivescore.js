import React from 'react'

export const Cardlivescore = (props) => {
    console.log(props)
    const { match } = props
    return (
        <div className='card1'>
            <div className='heade1 flex'>
            <div><img style={{ width: "30px" }} src={match.t1img ? match.t1img : "NA"} /></div>
            <div>{match.t1}</div>
                <div><img style={{ width: "30px" }} src={match.t2img ? match.t2img : "NA"} /></div>
                <div>{match.t2}</div>
            </div>
            <div style={{ fontSize: "11px", marginTop: "20px", display: "flex", gap: "70px" }}>
                <div>{match.dateTimeGMT}</div>
                <div>{match.matchType}</div>
            </div>
            <div>

                <div className='team flex'>


                    <div>{match.t1s ? match.t1s : '--(0)'}</div>
                    <div>{match.t2s ? match.t2s : '--(0)'}</div>
                </div>

            </div>

            <div style={{ fontSize: "11px", marginTop: "20px" }}>
                <div>{match.status}</div>

            </div>


        </div>
    )
}


