import React from 'react'
import {Create, SimpleForm, DateTimeInput, TextInput, NumberInput} from 'react-admin'

const LobbyCreate = (props) => {
  return(
    <Create title='Create new Lobby' {...props}>
      <SimpleForm >
        <TextInput source='name' />
        <NumberInput source='price' />
        <NumberInput source='kill-award' />
        <DateTimeInput source='date-time' />
        <TextInput source='time' />
        <TextInput source='map' />
      </SimpleForm>
    </Create>
  )
}

export default LobbyCreate