import React from 'react'
import {Edit, SimpleForm, DateTimeInput, TextInput, NumberInput} from 'react-admin'

const LobbyEdit = (props) => {
  return(
    <Edit title='Edit Lobby' {...props}>
      <SimpleForm >
        <TextInput source='name' />
        <NumberInput source='price' />
        <NumberInput source='kill-award' />
        <DateTimeInput
          source='date-time'
          options={{
            format: 'DD/MM/YYYY, HH:mm:ss',
            ampm: false,
            clearable: true
          }}
          format={(dateTime) => {
            const date = new Date(dateTime)
            const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date)
            const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(date)
            const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date)
            const hour = new Intl.DateTimeFormat('en', {hour: '2-digit'}).format(date)
            const minutes = new Intl.DateTimeFormat('en', {minute: 'numeric'}).format(date)
            console.log(`${da}-${mo}-${ye}`)
            console.log(`${hour}-${minutes}`)
            console.log(date)
          }}
        />
        <TextInput source='map' />
      </SimpleForm>
    </Edit>
  )
}

export default LobbyEdit