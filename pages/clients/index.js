import React from 'react'
import Link from 'next/Link'
const ClientsPage = () => {
  const clients = [
    { id: 'max', name: 'Maxiwell' },
    { id: 'man', name: 'Manuelle' },
  ]
  return (
    <div>
      <h1>This is the clients page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: '/clients/[id]',
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ClientsPage
