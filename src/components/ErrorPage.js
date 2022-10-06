import React from 'react'
import { useRouteError } from 'react-router-dom'
import Header from './Header'

const ErrorPage = () => {
  const errorPage = useRouteError()
  return (
    <>
      <Header />
      <div className='flex flex-col min-h-[700px] justify-center items-center'>
        <h1 className='text-4xl'>Ops! An Error Ocurred!</h1>
        <h2 className='text-red-600'>Error: {errorPage.status}</h2>
        <h2 className='text-red-600'> Error Type: {errorPage.statusText}</h2>
      </div>
    </>
  )
}

export default ErrorPage
