import { createSlice } from '@reduxjs/toolkit'

interface InterfaceResume {
  resume: {
    id: string,
    title:  string,
    email:  string,
    phoneNumber:  string,
    name:  string,
    surname:  string,
    projects:  string[],
    techSkills:  string[],
    softSkills:  string[],
    experience:  string,
    education:  string,
  }
}
// Define the initial state using that type
const initialState: InterfaceResume = {
  resume: {
    id:'',
    title: '',
    email: '',
    phoneNumber: '',
    name: '',
    surname: '',
    projects: [],
    techSkills: [],
    softSkills: [],
    experience: '',
    education: '',
  }
}

export const resumeSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
   
  },
})

export const {} = resumeSlice.actions

export default resumeSlice.reducer