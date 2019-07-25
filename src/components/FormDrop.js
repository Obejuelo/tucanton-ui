import React, {useState, useEffect} from 'react'

export default function({equipos, getClients}) {
    const [equipo, setEquipo] = useState('Selecciona')
    const [users, setUsers] = useState([])
    const [user, setUser] = useState('')

    const equipoRef = new React.createRef()
    const userRef = new React.createRef()

    useEffect(()=>{
        getUsers()
    },[equipo])

    const getUsers = () => {
        fetch(`/usuario/${equipo}`)
            .then(res => res.json())
            .then(data => {
                setUsers(data)
                // console.log(data)
            })
    }

    const _changeEquipo = () => {
        const valueEquipo = equipoRef.current.value;
        setEquipo(valueEquipo)
    }

    const _changeUser = () => {
        setUser(userRef.current.value)
        getClients(userRef.current.value)
    }

    return(
        <form>
            <div className="form-row justify-content-center">
                <div className="form-group col-md-4">
                    <label htmlFor="inputState">Equipo</label>
                    <select 
                        ref={equipoRef}
                        className="form-control" 
                        onChange={_changeEquipo} 
                        value={equipo}>
                            <option>Selecciona</option>
                        {equipos.map((equipo, index) => (
                            <option key={index}>{equipo.nombre}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="inputState">Usuario</label>
                    <select 
                        className="form-control"
                        onChange={_changeUser}
                        ref={userRef}
                        value={user}>
                        <option>Selecciona</option>
                        {users.map((user, index) => (
                            <option key={index}>{user.id}</option>
                        ))}
                    </select>
                </div>
            </div>
        </form>
    )
}