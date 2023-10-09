// import logo from './logo.svg';
import { Livescore } from './Components/Livescore/Livescore';
import { Currentmatches } from './Components/Currentmatches/Currentmatches';

import { TopNAv } from './Components/TopNav/TopNAv';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PageNotFound } from './Components/PageNotFound/PageNotFound';
import { PointTable } from './Components/Pointtable/PointTable';
import { Seriessearch } from './Components/Series Search/Seriessearch';
import { List } from './Components/List/List';
import { Country } from './Components/List/Country';
import { Matches } from './Components/List/Matches';
import { Players } from './Components/List/Players';

function App() {
  return (

    <div >

      <Router>
        <Routes>
          <Route path='/' element={<TopNAv />}>
            <Route path='' element={<Currentmatches />} />
            <Route path='UpcomingMatches' element={<Livescore />} />
            <Route path='UpcomingSeries' element={<Seriessearch />} />
            <Route path='list' element={<List />} >

            <Route path='/list/country' element={<Country/>} />
            <Route path='/list/matches' element={<Matches />} />
            <Route path='/list/players' element={<Players />} />
  

            </Route>

            <Route path='/point' element={<PointTable />} />
            <Route path='*' element={<PageNotFound />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;













