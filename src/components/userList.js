import React from 'react'
import UserCard from './userCard'

const UserList = ({listOfUser}) => {
  return (
    <div>
      {listOfUser.map(user => <UserCard user={user}/>)}
    </div>
  )
}

export default UserList