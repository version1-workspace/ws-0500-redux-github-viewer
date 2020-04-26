import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 16px;
  margin-top: 256px;

  h1 {
    text-align: center;
  }
`

const Profile = () => {
  return (
    <Container>
      <h1>Profile</h1>
    </Container>
  )
}

export default Profile
