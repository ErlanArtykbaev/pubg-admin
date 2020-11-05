import React from 'react'
import {Edit, SimpleForm, DateInput, TextInput, NumberInput, regex} from 'react-admin'

const LobbyEdit = (props) => {
  const validateTime = regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/ , 'неправильно написали время')

  return(
    <Edit title='Edit Lobby' {...props}>
      <SimpleForm >
        <TextInput source='name' />
        <NumberInput source='price' />
        <NumberInput source='kill-award' />
        <DateInput source='date' />
        <TextInput source='time' placeholder='hh:mm' validate={validateTime}/>
        <TextInput source='map' />
      </SimpleForm>
    </Edit>
  )
}

export default LobbyEdit