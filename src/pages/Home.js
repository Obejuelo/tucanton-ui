import React, {useState, useEffect} from 'react'
import FormDrop from '../components/FormDrop';
import TableUsers from '../components/TableUsers';
import {url} from '../util/config';

export default function() {
    const [equipos, setEquipos] = useState([])
    const [clients, setClients] = useState([])
    // const [usuarios, setUsuarios] = useState([])

    useEffect(()=>{
        getEquipos()
        getClients()
    },[])

    const getEquipos = () => {
        fetch(`${url}/equipo`)
            .then(res => res.json())
            .then(data => {
                setEquipos(data)
                // console.log(data);
            })
    }

    const getClients = (client='') => {
        fetch(`${url}/cliente/${client}`)
            .then(res => res.json())
            .then(data => {
                setClients(data)
            })
    }

    return(
        <div className='page'>
            <div className="container">
                <h2 className="text-center">Inicio</h2>
                <hr className='mb-4'/>
                <div className="row justify-content-center">
                    <div className="col-12">
                        <FormDrop equipos={equipos} getClients={getClients}/>
                    </div>
                    <div className="col-md-8">
                        {clients.length !== 0 ? <TableUsers clients={clients}/> : ''}
                    </div>
                </div>
            </div>
        </div>
    )
}