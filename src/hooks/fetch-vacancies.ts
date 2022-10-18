import { FormDefaultFilterState } from "../pages/page-vacancies/page-vacancies"
import { InterfaceVacancy } from "../slices/vacancies-slice"

export const fetchVacancies = async () => {
  return fetch('http://localhost:3001/vacancies')
  .then((data) => data.json())
}

export const fetchVacancyByID = async (id: string) => {
  return fetch('http://localhost:3001/vacancies?id=' + id)
  .then((data) => data.json())
}

export const fetchVacanciesByFilters = async (filters: FormDefaultFilterState) => {
  const { city } = filters
  const filterString = `?${'city=' + city}`
  console.log('http://localhost:3001/vacancies' + filterString)
  return fetch('http://localhost:3001/vacancies' + filterString)
  .then((data) => data.json())
}

export const postVacancy = async (data: InterfaceVacancy) => {
  const response = await fetch('http://localhost:3001/vacancies', {
    method: 'POST', 
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(data) 
  });
  return response.json();
}