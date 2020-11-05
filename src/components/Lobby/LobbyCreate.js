import React from 'react'
import {Create, SimpleForm, DateInput, TextInput, NumberInput, regex} from 'react-admin'

const LobbyCreate = (props) => {
  const validateTime = regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/ , 'неправильно написали время')
  return(
    <Create title='Create new Lobby' {...props}>
      <SimpleForm >
        <TextInput source='name' />
        <NumberInput source='price' />
        <NumberInput source='kill-award' />
        <DateInput source='date' />
        <TextInput source='time' placeholder='hh:mm' validate={validateTime} />
        <TextInput source='map' />
      </SimpleForm>
    </Create>
  )
}

export default LobbyCreate