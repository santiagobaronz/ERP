import React from 'react'
import {useAuthUser} from 'react-auth-kit'

export const Dashboard = () => {
	const auth = useAuthUser()
	console.log(auth())

  return (
	<div>Dashboard</div>
  )
}
