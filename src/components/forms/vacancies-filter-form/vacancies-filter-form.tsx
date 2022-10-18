import React from 'react'
import { Button, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import './vacancies-filter__form.scss'

const VacanciesFilterForm: React.FC<any> = ({
  handleSubmit,
  onSubmit,
  register
}) => {
  return (
    <form className='vacancies-filter__form' onSubmit={handleSubmit(onSubmit)}>

      <TextField {...register('search')} id='outlined-basic-search' label='Search' variant='outlined' />
      <TextField {...register('salaryFrom')} id='outlined-basic-from' label='Salary From' variant='outlined' />
      <TextField {...register('salaryTo')} id='outlined-basic-to' label='Salary To' variant='outlined' />

      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label-'>City</InputLabel>
        <Select
          labelId='demo-simple-select-label-'
          value='lviv'
          label='City'
          {...register('city')}
        >
          <MenuItem value={'lviv'}>Lviv</MenuItem>
          <MenuItem value={'kiev'}>Kiev</MenuItem>
          <MenuItem value={'kharkiv'}>Kharkiv</MenuItem>
        </Select>
      </FormControl>
      <FormControlLabel
        label="Available"
        {...register('available')}
        control={
          <Checkbox />
        }
      />  
      <Button variant='contained' type='submit'>Apply</Button>
    </form>
  )
}

export default VacanciesFilterForm
