import React from "react"
import {List, Datagrid, NumberField, TextField, DateField, DeleteButton, EditButton} from 'react-admin'

const LobbyList = (props) => {
  return(
    <List title='List Lobby' {...props}>
      <Datagrid>
        <TextField source='name' />
        <NumberField source='price' />
        <NumberField source='kill-award' />
        <TextField source='map' />
        <DateField source='date' />
        <TextField source='time' />
        <EditButton basePath='/lobbys' />
        <DeleteButton basePath='/lobbys' />
      </Datagrid>
    </List>
  )
}

export default LobbyList