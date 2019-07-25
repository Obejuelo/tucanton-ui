import React, {useState, useEffect} from 'react';
import {url} from '../util/config';

export default function() {
    const idRef = new React.createRef()
    const nameRef = new React.createRef()
    const equipoRef = new React.createRef()

    const [equipoId, setEquipoId] = useState([])
    const [users, setUsers] = useState([])
    const [equipo, setEquipo] = useState('')

    useEffect(()=>{
        fetch(`${url}/equipo`)
            .then(res=>res.json())
            .then(data => {
                setEquipoId(data)
            })
        fetch(`${url}/usuario`)
            .then(res=>res.json())
            .then(data => {
                setUsers(data)
            })
    },[])

    const _addUser = (e) => {
        e.preventDefault()
        const id = idRef.current.value
        const nombre = nameRef.current.value

        let body = {id, nombre, equipoId:equipo}

        fetch(`${url}/usuario`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(data => {
            setUsers([...users, data])
        })
    }

    const _changeValueEquipo = () => {
        const equipoId = equipoRef.current.value
        setEquipo(equipoId)
    }

    return(
        <div className='page'>
            <h2 className="text-center">Usuario</h2>
            <hr className='mb-4'/>
            <div className="row mt-3 justify-content-center">
                <div className="col-md-4">
                    <form className='form' onSubmit={_addUser}>
                        <div className="form-group">
                            <label htmlFor="id">Id</label>
                            <input 
                                type="text"
                                ref={idRef}
                                required
                                placeholder='id' 
                                className='form-control'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre</label>
                            <input 
                                type="text"
                                ref={nameRef}
                                required
                                placeholder='Nombre' 
                                className='form-control'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="nombre">Equipo id</label>
                            <select 
                                id="equipo"
                                ref={equipoRef}
                                onChange={_changeValueEquipo}
                                value={equipo}
                                className='form-control'>
                                    <option>seleccionar</option>
                                    {equipoId.map((equipo, idx) => (
                                        <option key={idx}>{equipo.nombre}</option>
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
                                <th scope="col">Nombre</th>
                                <th scope="col">Equipo id</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, idx) => (
                                <tr key={idx}>
                                    <th scope="row">{idx+1}</th>
                                    <td>{user.id}</td>
                                    <td>{user.nombre}</td>
                                    <td>{user.equipoId}</td>
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