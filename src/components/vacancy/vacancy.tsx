import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router'
import './vacancy.scss'

interface VacancyInterface {
  id: string,
  title: string,
  describe: string,
  salary: string,
  date: string,
  currency: 'dollar' | 'euro' | 'uan',
  available: boolean,
  city: 'lviv' | 'kiev' | 'kharkiv',
}

const Vacancy: React.FC<VacancyInterface> = ({
  id,
  title,
  describe,
  salary,
  date,
  currency,
  available,
  city
}) => {

  const navigate = useNavigate()

  const redirectOnVacancyDetails = (id: string) => {
    navigate(`/vacancies/${id}`)
  }

  return (
    <li className='vacancy' key={id}>
      <div className='vacancy__first-information'>
        <h5 className='vacancy__title'>{title} | salary: {salary} {currency} city: {city}</h5>
        <p className='vacancy__sub-title'>{describe}</p>
        <p className='vacancy__data'>{date}</p>
      </div>
      <Button variant='contained' className='vacancy__button' onClick={() => redirectOnVacancyDetails(id)}>Visit</Button>
    </li>
  )
}

export default Vacancy
