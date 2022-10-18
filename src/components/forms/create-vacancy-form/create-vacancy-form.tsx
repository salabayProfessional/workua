import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import ActiveComponent from '../../active-component'
import CustomStepper from '../../Stepper'
import { ErrorMessage } from '@hookform/error-message';
import { postVacancy } from '../../../hooks/fetch-vacancies'
import { createID } from '../../../algorithms/createID'
import './create-vacancy-form.scss'

const createDate = () => {
  return '21.01.2022'
}

interface InterfaceVacancy {
  id: string,
  title: string,
  describe: string,
  salary: string,
  date: string,
  currency: 'dollar' | 'euro' | 'uan',
  available: boolean,
  city: 'lviv' | 'kiev' | 'kharkiv',
  category: 'computer Science' | 'shop worker' | 'builder'
}

const steps = [
  'data',
  'location',
  'publish',
]

const CreateVacancyForm: React.FC = () => {
  const defaultValues: InterfaceVacancy = {
    id: '',
    title: '',
    describe: '',
    salary: '',
    date: '',
    currency: 'dollar',
    available: true,
    city: 'lviv',
    category: 'computer Science' 
  }

  const [activeStep, setActiveStep] = useState<number>(0)

  const { register, handleSubmit, formState: { errors } } = useForm({defaultValues})

  const onSubmit = (values: InterfaceVacancy) => {
    if(activeStep === 3) {
      setActiveStep(activeStep + 1)
      return
    }
    
    postVacancy({...values, date: createDate(), id: createID()})
  }

  return (
    <form className='create-vacancy-form' onSubmit={handleSubmit(onSubmit)}>

      <CustomStepper steps={steps} activeStep={activeStep} />

      <ActiveComponent active={activeStep === 0}>
        <TextField {...register('title', { required: 'title is first that user see' })} id='outlined-basic-title' label='Title' variant='outlined' />

        <ErrorMessage
          errors={errors}
          name='title'
          render={({ message }) => <p className='error-message'>{message}</p>}
        />

        <TextField {...register('describe', { required: 'user should have info about job' })} id='outlined-basic-describe' label='Describe' variant='outlined' />

        <ErrorMessage
          errors={errors}
          name='describe'
          render={({ message }) => <p className='error-message'>{message}</p>}
        />

        <TextField {...register('salary', { required: true })} id='outlined-basic-salary' label='Salary' variant='outlined' />
    

        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>Currency</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='select-currency'
            value={'dollar'}
            label='currency'
            {...register('currency', { required: true })}
          >
            <MenuItem value={'dollar'}>Dollar</MenuItem>
            <MenuItem value={'euro'}>Euro</MenuItem>
            <MenuItem value={'uan'}>Uan</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label-category'>Category</InputLabel>
          <Select
            labelId='demo-simple-select-label-category'
            id='select-currency'
            value={'builder'}
            label='category'
            {...register('category', { required: true })}
          >
            <MenuItem value={'computer science'}>Computer science</MenuItem>
            <MenuItem value={'builder'}>Builder</MenuItem>
            <MenuItem value={'shop worker'}>Shop Worker</MenuItem>
          </Select>
        </FormControl>
      </ActiveComponent>

      <ActiveComponent active={activeStep === 1}>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label-city'>City</InputLabel>
          <Select
            labelId='demo-simple-select-label-city'
            id='select-city'
            value={'lviv'}
            label='city'
            {...register('city', { required: true })}
          >
            <MenuItem value={'lviv'}>Lviv</MenuItem>
            <MenuItem value={'kiev'}>Kiev</MenuItem>
            <MenuItem value={'kharkiv'}>Kharkiv</MenuItem>
          </Select>
        </FormControl>
      </ActiveComponent>

      <ActiveComponent active={activeStep === 2}>
        <h1 className='title'>Do you want to publish it?</h1>
      </ActiveComponent>
      
      {
      activeStep < 2? 
      <Button variant='contained' type='button' onClick={() => setActiveStep(activeStep + 1)}>Next</Button> 
      : 
      <Button variant='contained' type='submit'>Submit</Button>
      }
      
    </form>
  )
}

export default CreateVacancyForm
