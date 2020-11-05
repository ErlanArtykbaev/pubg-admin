import React from 'react'
import restProvider from 'ra-data-simple-rest'
import {Admin, Resource} from "react-admin"

import LobbyList from "./components/Lobby/LobbyList"
import LobbyEdit from "./components/Lobby/LobbyEdit"
import LobbyCreate from "./components/Lobby/LobbyCreate"
import authProvider from "./authProvider";

// const httpClient = (url, options = {}) => {
//   if (!options.headers) {
//     options.headers = new Headers({ Accept: 'application/json' });
//   }
//   const { token } = JSON.parse(localStorage.getItem('auth'));
//   options.headers.set('Authorization', `Bearer ${token}`);
//   return fetchUtils.fetchJson(url, options);
// };
//
// const dataProvider = restProvider('http://localhost:3004', httpClient)

function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3004')} authProvider={authProvider}>
      <Resource name='Lobbys' list={LobbyList} edit={LobbyEdit} create={LobbyCreate} />
    </Admin>
  )
}

export default App