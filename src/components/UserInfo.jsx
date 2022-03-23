import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';

const Style = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  background-color: #5ea1c0;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 20px;
  letter-spacing: 0.3px;
  margin-bottom: 16px;
  text-align: center;
  text-transform: uppercase;
`;

const Card = styled.div`
  border: 3px solid #fff;
  border-radius: 10px;
  padding: 30px;
  color: #FFf;
  width: 100%;
  max-width: 500px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
`
const Label = styled.span`
  display: block;
  font-size: 25px;
  padding: 10px 0;
  color: white;
`
const Info = styled.p`
  color: black;
  font-weight: bold;
`

const UserInfo = () => {
  const {userName} = useParams()
  const [user, setUser] = useState({})

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users?name=${userName}`)
    .then(response => response.json())
    .then(json => {
      setUser(json[0])
    })
  }, [userName])

  console.log(user);
  return (
    <Style>
      {user && user.name 
      ?<Card>
          <Info><Label>Nombre </Label>{user.name}</Info>
          <Info><Label>Correo </Label>{user.email}</Info>
          <Info><Label>Usuario </Label> {user.username}</Info>
          <Info><Label>Tel </Label> {user.phone}</Info>
          <Info><Label>Ciudad </Label> {user.address.city}</Info>
          <Info><Label>Web </Label> {user.website}</Info>
          <Info><Label>Compañia </Label> {user.company.name}</Info>
      </Card>
      :<Title>No existe ese usuario</Title>
      }
    </Style>
  )
}

export default UserInfo