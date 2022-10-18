import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { vacancies } from '../vacancies'

export interface InterfaceVacancy {
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

interface VacanciesState {
  vacancies: InterfaceVacancy[],
  pending: boolean,
  error: string
}

const initialState: VacanciesState = {
  vacancies: [],
  pending: false,
  error: ''
}

export const fetch_vacancies = createAsyncThunk('fetch/vacancies', async () => {
  const data = await fetch('http://localhost:3001/vacancies')
  const parsed = await data.json()
  return parsed
})

const vacanciesSlice = createSlice({
  name: 'vacancies',
  initialState,
  reducers: {
   
  },
  extraReducers: {
    [fetch_vacancies.fulfilled.type]: (state, action: PayloadAction<InterfaceVacancy[]>) => {
      state.vacancies = action.payload
      state.pending = false
    },
    [fetch_vacancies.pending.type]: (state) => {
      state.pending = true
    },
    [fetch_vacancies.rejected.type]: (state, action: PayloadAction<InterfaceVacancy[]>) => {
      state.error = action.payload as any
      state.pending = false 
    }
  }
})

export const {} = vacanciesSlice.actions
export default vacanciesSlice.reducer