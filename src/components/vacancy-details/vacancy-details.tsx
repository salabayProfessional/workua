import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import { useParams } from 'react-router'
import {InterfaceVacancy} from '../../slices/vacancies-slice'
import CustomModal from '../custom-modal'
import { fetchVacancyByID } from '../../hooks/fetch-vacancies'
import './vacancy-details.scss'

const VacancyDetails: React.FC = () => {
  const { id } = useParams()
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const [vacancy, setVacancy] = useState<InterfaceVacancy | null>(null)

  useEffect(() => {
    fetchVacancyByID(id as string)
    .then((data) => data)
    .then((data) => setVacancy(data[0]))
  }, [])

  console.log(vacancy)

  return (
    <>
      <CustomModal open={isOpen} toggle={toggle} />
      <div className='vacancy-details'>
        <div>
          <h1 className='title'>{ vacancy?.title }</h1>  
          <h5 className='sub-title'>{ vacancy?.describe }</h5>
          <p className='vacancy-details__salary'>Salary: { vacancy?.salary }</p>
          <p className='vacancy-details__date'>Date: { vacancy?.date }</p>
        </div>

        <div>
          <h2 className='title'>About our company?</h2>
          <p className='sub-title'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero obcaecati, ipsam omnis natus praesentium iure! Culpa, sit obcaecati, repudiandae sapiente ad cupiditate, modi accusantium labore velit aperiam tempora commodi provident. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla commodi unde, repellendus quibusdam perferendis nihil molestiae. Molestiae nobis, ipsum veritatis assumenda velit laudantium ad, similique dignissimos porro error earum fugit? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit nesciunt laudantium fuga dicta harum doloremque facilis, corporis mollitia! Adipisci voluptate vitae officia quia vero quae. Perferendis deleniti repellat molestiae minus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi dolore recusandae facere, dolorum odio eos, in quibusdam quidem dolores sed quae? Numquam quas deserunt excepturi atque? Esse similique odio atque!</p>
        </div>

        <div>
          <h2 className='title'>What is your work?</h2>
          <p className='sub-title'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero obcaecati, ipsam omnis natus praesentium iure! Culpa, sit obcaecati, repudiandae sapiente ad cupiditate, modi accusantium labore velit aperiam tempora commodi provident. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla commodi unde, repellendus quibusdam perferendis nihil molestiae. Molestiae nobis, ipsum veritatis assumenda velit laudantium ad, similique dignissimos porro error earum fugit? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit nesciunt laudantium fuga dicta harum doloremque facilis, corporis mollitia! Adipisci voluptate vitae officia quia vero quae. Perferendis deleniti repellat molestiae minus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi dolore recusandae facere, dolorum odio eos, in quibusdam quidem dolores sed quae? Numquam quas deserunt excepturi atque? Esse similique odio atque!</p>
        </div>

        <div className='group-btn'>
          <Button variant='contained' type='button' onClick={toggle}>Apply</Button>
        </div>
      </div>  
    </>
  ) 
}

export default VacancyDetails
 