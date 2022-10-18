import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import PageMain from '../../pages/page-main'
import PageVacancies from '../../pages/page-vacancies'
import PageResume from '../../pages/page-resume'
import PageProfile from '../../pages/page-profile'
import VacancyDetails from '../vacancy-details'
import CreateVacancyForm from '../forms/create-vacancy-form'
import ResponsiveAppBar from '../header'
import './app.scss'

const App: React.FC = () => {
  return (
    <div className='app'>
      <Router>
        <ResponsiveAppBar />
        <main>
          <Routes>
          <Route path='/main' element={<PageMain />} /> 
            <Route path='/vacancies' element={<PageVacancies />} />
            <Route path='/vacancies/:id' element={<VacancyDetails />} />
            <Route path='/create-vacancy' element={<CreateVacancyForm />} />
            <Route path='/resume' element={<PageResume />} />
            <Route path='/profile' element={<PageProfile />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
