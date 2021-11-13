import React from 'react'
import { useRouter } from 'next/router'
const ClientProjectPages = () => {
  const router = useRouter()
  console.log(router.query)

  function loadProjectHandler() {
    // load project

    router.push({
      pathname: '/clients/[id]/[projectid]',
      query: { id: 'max', projectid: 'project A' },
    })
  }
  return (
    <div>
      <h1>The projects of a given client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  )
}

export default ClientProjectPages
