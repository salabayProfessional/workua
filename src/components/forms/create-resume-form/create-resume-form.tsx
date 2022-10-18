import React, { useState } from 'react'
import { Button, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import CustomStepper from '../../Stepper'
import ActiveComponent from '../../active-component'
import './create-resume-form.scss'

interface DefaultValues {
  email: string,
  phoneNumber: string,
  name: string,
  surname: string,
  projects: string[],
  techSkills: string[],
  softSkills: string[],
  experience: string,
  education: string,
  previewsJobs: string[],
  age: number
}

const CreateResumeForm: React.FC = () => {
  const [step, setStep] = useState(0)

  const defaultValues: DefaultValues = {
    email: '',
    phoneNumber: '',
    name: '',
    surname: '',
    projects: [],
    techSkills: [],
    softSkills: [],
    experience: '',
    education: '',
    previewsJobs: [],
    age: 0
  }

  const { register, handleSubmit } = useForm({defaultValues})

  const onSubmit = (values: DefaultValues) => {
    console.log(values)
  }

  const onNext = () => setStep(step + 1)

  return (
    <form className='resume-form' onSubmit={handleSubmit(onSubmit)} >
      <CustomStepper steps={['contacts', 'you', 'cv details']} activeStep={step} />
      <ActiveComponent active={step === 0}>
        <TextField {...register('email')} id='outlined-basic-email' label='email' variant='outlined' />
        <TextField {...register('phoneNumber')} id='outlined-basic-phoneNumber' label='phone number' variant='outlined' />
      </ActiveComponent>
      <ActiveComponent active={step === 1}>
        <TextField {...register('name')} id='outlined-basic-name' label='name' variant='outlined' />
        <TextField {...register('surname')} id='outlined-basic-surname' label='surname' variant='outlined' />
        <TextField {...register('age')} id='outlined-basic-describe' label='age' variant='outlined' />
      </ActiveComponent>
      <ActiveComponent active={step === 2}>
        <TextField {...register('techSkills')} id='outlined-basic-techSkills' label='tech skills' variant='outlined' />
        <TextField {...register('softSkills')} id='outlined-basic-softSkills' label='soft skills' variant='outlined' />
        <TextField {...register('experience')} id='outlined-basic-experience' label='experience' variant='outlined' />
        <TextField {...register('education')} id='outlined-basic-education' label='education' variant='outlined' />
      </ActiveComponent>

      {step === 2 ? <Button variant='contained' type='submit'>Submit</Button> : <Button variant='contained' type='button' onClick={onNext}>Next</Button>}
    </form>
  )
}

export default CreateResumeForm
