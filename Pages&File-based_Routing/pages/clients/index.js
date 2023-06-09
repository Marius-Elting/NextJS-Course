import React from 'react'
import Link from 'next/link'
const Clients = () => {

    const clients = [
        {
            id: "max", name: "maximilian"
        },
        {
            id: "manu", name: "manuel"
        }
    ]
    return (
        <div>
            <ul>
                {clients.map((client) => <li key={client.id}><Link href={{
                    pathname: "/clients/[id]",
                    query: {
                        id: client.id
                    }
                }}>{client.name}</Link></li>)}
            </ul>
        </div>
    )
}

export default Clients
