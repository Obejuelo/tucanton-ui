import React, {useState, useEffect} from 'react';
import {url} from '../util/config';

export default function() {
    const idRef = new React.createRef()
    const emailRef = new React.createRef()
    const usuarioRef = new React.createRef()

    const [user, setUser] = useState('')
    const [users, setUsers] = useState([])
    const [client, setClient] = useState([])

    useEffect(()=>{
        fetch(`${url}/cliente`)
            .then(res=>res.json())
            .then(data => {
                setClient(data)
            })
        fetch(`${url}/usuario`)
            .then(res=>res.json())
            .then(data => {
                setUsers(data)
            })
    },[])

    const _addClient = (e) => {
        e.preventDefault()
        const id = idRef.current.value
        const email = emailRef.current.value

        let body = {id, email, usuarioId:user}

       fetch(`${url}/cliente`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(data => {
            setClient([...client, data])
        })
    }

    const _changeValueUser = () => {
        setUser(usuarioRef.current.value)
    }

    return(
        <div className='page'>
            <h2 className="text-center">Cliente</h2>
            <hr className='mb-4'/>
            <div className="row mt-3 justify-content-center">
                <div className="col-md-4">
                    <form className='form' onSubmit={_addClient}>
                        <div className="form-group">
                            <label htmlFor="name">Id</label>
                            <input 
                                type="text"
                                ref={idRef}
                                required
                                placeholder='id' 
                                className='form-control'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="nombre">Email</label>
                            <input 
                                type="email"
                                ref={emailRef}
                                required
                                placeholder='Email' 
                                className='form-control'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="nombre">Equipo id</label>
                            <select 
                                id="equipo"
                                ref={usuarioRef}
                                onChange={_changeValueUser}
                                value={user}
                                className='form-control'>
                                    <option>Seleccionar</option>
                                    {users.map((user, idx) => (
                                        <option key={idx}>{user.id}</option>
                                    ))}
                            </select>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-dark">Agregar</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                    <table className="table table-hover table-dark table-sm table-responsive-sm">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Id</th>
                                <th scope="col">Email</th>
                                <th scope="col">Usuario id</th>
                            </tr>
                        </thead>
                        <tbody>
                            {client.map((item, idx) => (
                                <tr key={idx}>
                                    <th scope="row">{idx+1}</th>
                                    <td>{item.id}</td>
                                    <td>{item.email}</td>
                                    <td>{item.usuarioId}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                </div>
                
            </div>
        </div>
    )
}