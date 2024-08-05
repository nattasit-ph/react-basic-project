import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <>
		{/* css */}
		<link rel="stylesheet" href="assets/css/app.css" />

		<div className='bg-info'>
			<div className='d-flex flex-column align-items-center justify-content-center vh-100'>
				{children}
			</div>
		</div>
		
		{/* javascript */}
		<script src="assets/js/app.js"></script>
		</>
  )
}

export default AuthLayout