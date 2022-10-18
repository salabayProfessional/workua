import React from 'react'
import CreateResume from '../../components/forms/create-resume-form'
import './page-main.scss'


const PageMain: React.FC = () => {
  return (
    <div className='page-main'>
      <section className='bg-1'>
        <h2 className='title'>Registration</h2>
        <CreateResume />
      </section>
      <section className='bg-2'>
        <h2 className='title'>Log in</h2>
        <CreateResume />
      </section>
    </div>
  )
}

export default PageMain
