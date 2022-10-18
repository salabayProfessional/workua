import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Vacancy from '../../components/vacancy'
import Sidebar from '../../components/sidebar'
import { InterfaceVacancy } from '../../slices/vacancies-slice'
import VacanciesFilterForm from '../../components/forms/vacancies-filter-form'
import { fetchVacancies, fetchVacanciesByFilters } from '../../hooks/fetch-vacancies'
import './page-vacancies.scss'

export interface FormDefaultFilterState {
  search: string,
  salaryFrom: number | string,
  salaryTo: number | string,
  city: 'lviv' | 'kiev' | 'kharkiv',
  available: boolean | null
}

const PageVacancies: React.FC = () => {
  const [vacancies, setVacancies] = useState([])

  const defaultValues: FormDefaultFilterState = {
    search: '',
    salaryFrom: 0,
    salaryTo: 0,
    city: 'lviv',
    available: true
  }

  useEffect(() => {
    fetchVacancies()
    .then((data) => data)
    .then((data) => setVacancies(data))
  }, [])

  const { register, handleSubmit } = useForm({defaultValues})

  const onSubmit = (values: FormDefaultFilterState) => {
    fetchVacanciesByFilters(values)
    .then((data) => data)
    .then((data) => setVacancies(data))
  }

  const list = vacancies.map((vacancy: InterfaceVacancy) => <Vacancy key={vacancy.id} {...vacancy} />)

  return (
    <>
    <Sidebar>
      <VacanciesFilterForm register={register} handleSubmit={handleSubmit} onSubmit={onSubmit} />
    </Sidebar>
    
    <div className='page-vacancies'>
      <ul className='page-vacancies__list'>
        { list }
      </ul>
    </div>
    </>
  )
}

export default PageVacancies  