import React from 'react'
import { useRouter } from 'next/router'
const ClientAllProjects = () => {
    const router = useRouter()

    const loadProjectHandler = () => {
        // ananas
        router.push("/clients/max/projectA")
    }
    return (
        <div>
            <h1>Here you can find all Client Projects</h1>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    )
}

export default ClientAllProjects
