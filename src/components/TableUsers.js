import React from 'react'

export default function({clients}) {
    return(
        <table className="table table-hover table-dark table-sm table-responsive-sm">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Correo</th>
                </tr>
            </thead>
            <tbody>
                {clients.map((client, idx) => (
                    <tr key={idx}>
                        <th scope="row">{idx+1}</th>
                        <td>{client.usuarioId}</td>
                        <td>{client.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}