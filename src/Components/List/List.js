import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const List = () => {
  return (
   <section className='body2'>
   <div class="numberlist">
   <ol>
   <li>
   <Link to="/list/country">Country List</Link>
   </li>
   <li>
   <Link to="/list/matches">Matches List</Link>
   </li>
   <li>
   <Link to="/list/players">Players List</Link>
   </li>
   
   </ol>
</div>
<Outlet/>
   </section>
  )
}
