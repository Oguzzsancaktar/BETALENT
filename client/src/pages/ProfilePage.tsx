import React from 'react'
import { ProfileImages, ProfileUpdateForm } from '@/components'
import { useAuth } from '@/hooks/useAuth'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  max-width: 400px;
  margin: auto;
`
const ProfilePage = () => {
  const { loggedUser } = useAuth()
  console.log(loggedUser.user)
  return (
    <div>
      <Link to="/">Home</Link>
      <Container>
        <ProfileImages />
        <ProfileUpdateForm />
      </Container>
    </div>
  )
}

export default ProfilePage
