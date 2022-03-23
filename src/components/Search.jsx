import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { SearchBar } from './SearchBar';

const Style = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  background-color: #7256a7;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 20px;
  letter-spacing: 0.3px;
  margin-bottom: 16px;
  text-align: center;
  text-transform: uppercase;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`
const Card = styled.div`
  border: 1px solid gray;
  border-radius: 10px;
  padding: 30px;
  color: #FFf;
`



export function Search() {
  // const [words] = useState(userList);
  const [users, setUsers] = useState([])
  const [usersFilter, setUsersFilter] = useState([])
  const [filter, setFilter] = useState([])
  const [words, setWords] = useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
          setUsers(json)
        })
  }, [])
  useEffect(()=>{
    setWords(users.map(u => u.name))
  }, [users])

  useEffect(()=>{
    if (filter) {
      setUsersFilter( users.filter(u => u.name.toLowerCase().includes(filter.toLowerCase())))
    }else{
      setUsersFilter([])
    }
  }, [filter, setUsersFilter, users])

  return (
    <Style>
        <div>
        {/* Search bar */}
        <Title>
          Busca el usuario
          <br />
        </Title>
        <SearchBar words={words} setFilter={setFilter}/>
      </div>
      <CardContainer>
        {
         usersFilter.length > 0 
         ? usersFilter.map(user => (
           <Card key={user.id}>
             <p>Nombre: {user.name}</p>
             <p>Correo: {user.email}</p>
             <p>Telefono: {user.phone}</p>
           </Card>
         ))
         : <Title>Esperando termino...</Title>
        }
      </CardContainer>
    </Style>
  );
}
