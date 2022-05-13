import React from 'react'
import { UserImage } from '../image'
import { List, ListItem } from './Styled'

const ProfileImages = () => {
  return (
    <List>
      <ListItem>
        <UserImage />
      </ListItem>
      <ListItem>
        <UserImage />
      </ListItem>
      <ListItem>
        <UserImage />
      </ListItem>
      <ListItem>
        <UserImage />
      </ListItem>
      <ListItem>
        <UserImage />
      </ListItem>
    </List>
  )
}

export default ProfileImages
