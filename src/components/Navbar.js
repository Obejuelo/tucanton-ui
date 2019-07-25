import React from 'react';
import {Link} from 'react-router-dom';

export default function() {
    return(
        <nav className="navbar navbar-expand-lg bg-dark container navbar-dark">
            <div className='toolbar'>
                <h3 className='text-white'>Tucanton</h3>
            </div>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to='/' className="nav-link" >Inicio</Link>
                </li>
                <li className="nav-item">
                    <Link to='/equipo' className="nav-link" >Equipo</Link>
                </li>
                <li className="nav-item">
                    <Link to='/usuario' className="nav-link" >Usuario</Link>
                </li>
                <li className="nav-item">
                    <Link to='/cliente' className="nav-link" >Cliente</Link>
                </li>
            </ul>
            </div>
        </nav>
    )
}