import React from 'react'
import './page-resume.scss'

export interface interfaceResume {
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

const PageResume: React.FC = () => {

  return (
    <div className='page-resume'>
    
    </div>
  )
}

export default PageResume
