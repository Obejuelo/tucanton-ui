import React, {useState, useEffect} from 'react';
import {url} from '../util/config';

export default function() {
    const [equipos, setEquipo] = useState([])
    let idRef = new React.createRef()
    let nameRef = new React.createRef()

    useEffect(()=>{
        fetch(`${url}/equipo`)
            .then(res=>res.json())
            .then(data => {
                setEquipo(data)
            })
    },[])

    const _addEquipo = (e) => {
        e.preventDefault()

        const id  = idRef.current.value
        const nombre  = nameRef.current.value
        const body = {id, nombre}

        fetch(`${url}/equipo`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            setEquipo([...equipos, data])
            // console.log(data);
        })
    }

    return(
        <div className='page'>
            <h2 className="text-center">Equipo</h2>
            <hr className='mb-4'/>
            <div className="row mt-3 justify-content-center">
                <div className="col-md-4">
                    <form className='form' onSubmit={_addEquipo}>
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
                            </tr>
                        </thead>
                        <tbody>
                            {equipos.map((equipo, idx) => (
                                <tr key={idx}>
                                    <th scope="row">{idx+1}</th>
                                    <td>{equipo.id}</td>
                                    <td>{equipo.nombre}</td>
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