import React from 'react'

export const Seriescard = (props) => {
    console.log(props)
    const { series } = props
    return (
        <div className='card2'>
            <div className='name'>
                <div>{series.name}</div>
               
            </div>
            <div  className='header2 flex2'>
                <div>Start : {series.startDate}</div>
                <div>End : {series.endDate}</div>
            </div>

            <div className='score'>
            <div>ODI : {series.odi}</div>
            <div>T20 : {series.t20}</div>
            <div>TEST : {series.test}</div>
            <div>Squeds : {series.squads}</div>
            <div>Matches : {series.matches}</div>
            </div>

        </div>
    )
}


