import React from 'react'
import restProvider from 'ra-data-simple-rest'
import {Admin, Resource} from "react-admin"

import LobbyList from "./components/Lobby/LobbyList"
import LobbyEdit from "./components/Lobby/LobbyEdit"
import LobbyCreate from "./components/Lobby/LobbyCreate"

function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3004')}>
      <Resource name='Lobbys' list={LobbyList} edit={LobbyEdit} create={LobbyCreate} />
    </Admin>
  )
}

export default App