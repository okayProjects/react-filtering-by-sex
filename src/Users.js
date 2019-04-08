import React from 'react';

const User = (props) => (
    <div className='userInfo'>
        <h1>{props.user.name}</h1>
        <h4><strong></strong>Informacje o użytkowniku</h4>
        <p>Wiek użytkownika: <strong>{props.user.age}</strong></p>
        <p>Płeć użytkownika {props.user.sex}</p>
    </div>
)

// const User = ({ user }) => (
//     <h3>Użytkownik {user.name} ma {user.age} lat </h3>
// )

export default User;